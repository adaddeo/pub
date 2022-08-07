
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "openzeppelin-contracts/contracts/access/AccessControl.sol";
import "openzeppelin-contracts/contracts/access/Ownable.sol";
import "openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol";

contract Publication is Ownable, AccessControl {
  event IssuePublished(uint256 indexed issueId, uint256[] _submissionIds, string data);
  event NewPublication(string title);
  event NewIssue(uint256 issueId);
  event NewSubmission(uint256 indexed issueId, uint256 submissionId, string content);

  bytes32 public constant PUBLISHER_ROLE = keccak256("PUBLISHER_ROLE");

  uint256 private nextIssueId;
  mapping(uint256 => Issue) private issues;

  // TODO centralize for claiming across publications? too intense for now?
  mapping(address => uint256) private unclaimedRewards;

  struct Issue {
    uint256 submissionsOpenAt;
    uint256 submissionsCloseAt;
    uint256 publishedAt;
    uint256 submissionFee;
    uint256 rewards;

    uint256 nextSubmissionId;
    mapping(uint256 => Submission) submissions;

    uint256 nextContentId;
    mapping(uint256 => Submission) contents;
  }

  struct Submission {
    address submitter;
  }

  constructor() {
    _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _setupRole(PUBLISHER_ROLE, msg.sender);
  }

  /** queries */

  function submissionFee(uint256 _issueId) external view returns (uint256) {
    return issues[_issueId].submissionFee;
  }

  function issueRewards(uint256 _issueId) external view returns (uint256) {
    return issues[_issueId].rewards;
  }

  function submissionsCount(uint256 _issueId) external view returns (uint256) {
    return issues[_issueId].nextSubmissionId;
  }

  /** commands */

  function createIssue(
    uint256 _submissionsOpenAt,
    uint256 _submissionsCloseAt,
    uint256 _submissionFee
  ) external onlyRole(PUBLISHER_ROLE) {
    uint256 issueId = nextIssueId++;
    Issue storage nextIssue = issues[issueId];
    nextIssue.submissionsOpenAt = _submissionsOpenAt;
    nextIssue.submissionsCloseAt = _submissionsCloseAt;
    nextIssue.submissionFee = _submissionFee;
    // setup NFT?
    emit NewIssue(issueId);
  }

  function createSubmission(uint256 _issueId, string calldata content) external payable {
    Issue storage issue = issues[_issueId];

    if (block.number < issue.submissionsOpenAt || block.number > issue.submissionsCloseAt) {
      revert SubmissionsClosed();
    }

    if (msg.value != issue.submissionFee) {
      revert SubmissionFeeNotPaid();
    }

    uint256 submissionId = issue.nextSubmissionId++;
    Submission storage submission = issue.submissions[submissionId];
    submission.submitter = msg.sender;
    issue.rewards += msg.value;
    emit NewSubmission(_issueId, submissionId, content);
  }

  function publishIssue(uint256 _issueId, uint256[] calldata _submissionIds, string calldata data) external onlyRole(PUBLISHER_ROLE) {
    Issue storage issue = issues[_issueId];
    if (issue.publishedAt != 0) {
      revert IssueAlreadyPublished();
    }
    issue.publishedAt  = block.timestamp;
    uint256 length = _submissionIds.length;
    for (uint256 i = 0; i < length;) {
      Submission storage submission = issue.submissions[_submissionIds[i]];
      if (submission.submitter == address(0)) {
        revert InvalidSubmissionId(_submissionIds[i]);
      }
      unclaimedRewards[submission.submitter] += issue.rewards / length;
      unchecked { ++i; }
    }
    // should the content be stored in log or storage?
    // also include
    emit IssuePublished(_issueId, _submissionIds, data);
  }

  error InvalidSubmissionId(uint256 submissionId);
  error IssueAlreadyPublished();
  error PermissionDenied();
  error SubmissionFeeNotPaid();
  error SubmissionsClosed();
}
