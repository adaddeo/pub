
// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.10;

import "openzeppelin-contracts/contracts/access/Ownable.sol";
import "openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol";

error SubmissionFeeNotPaid();
error SubmissionsClosed();

contract Journal is Ownable {
  event NewPublication(uint256 indexed publicationId, string title);
  event NewIssue(uint256 indexed publicationId, uint256 indexed issueId);
  event NewSubmission(uint256 indexed publicationId, uint256 indexed issueId, uint256 indexed submissionId, string content);

  struct Publication {
    address owner;

    uint256 nextIssueId;
    mapping(uint256 => Issue) issues;
  }

  struct Issue {
    uint256 publicationId;
    uint256 submissionsOpenBlock;
    uint256 submissionsCloseBlock;
    uint256 submissionFee;
    uint256 collectedSubmissionFees;
    uint256 distributedSubmissionFees;

    uint256 nextSubmissionId;
    mapping(uint256 => Submission) submissions;
  }

  struct Submission {
    address submitter;
  }

  uint256 nextPublicationId = 0;
  mapping(uint256 => Publication) publications;

  /** queries */

  function submissionFee(uint256 _publicationId, uint256 _issueId) external view returns (uint256) {
    return publications[_publicationId].issues[_issueId].submissionFee;
  }

  function collectedSubmissionFees(uint256 _publicationId, uint256 _issueId) external view returns (uint256) {
    return publications[_publicationId].issues[_issueId].collectedSubmissionFees;
  }

  function distributedSubmissionFees(uint256 _publicationId, uint256 _issueId) external view returns (uint256) {
    return publications[_publicationId].issues[_issueId].distributedSubmissionFees;
  }

  function submissionsCount(uint256 _publicationId, uint256 _issueId) external view returns (uint256) {
    return publications[_publicationId].issues[_issueId].nextSubmissionId;
  }

  /** commands */

  function createPublication(string calldata name) external {
    uint256 publicationId = nextPublicationId++;
    Publication storage publication = publications[publicationId];
    publication.owner = msg.sender;
    emit NewPublication(publicationId, name);
  }

  function createIssue(
    uint256 _publicationId,
    uint256 _submissionsOpenBlock,
    uint256 _submissionsCloseBlock,
    uint256 _submissionFee
  ) external onlyOwner {
    Publication storage publication = publications[_publicationId];
    require(publication.owner == msg.sender);
    uint256 issueId = publication.nextIssueId++;
    Issue storage nextIssue = publication.issues[issueId];
    nextIssue.submissionsOpenBlock = _submissionsOpenBlock;
    nextIssue.submissionsCloseBlock = _submissionsCloseBlock;
    nextIssue.submissionFee = _submissionFee;
    emit NewIssue(_publicationId, issueId);
  }

  function createSubmission(uint256 _publicationId, uint256 _issueId, string calldata content) external payable {
    Publication storage publication = publications[_publicationId];
    Issue storage issue = publication.issues[_issueId];

    if (block.number < issue.submissionsOpenBlock || block.number > issue.submissionsCloseBlock) {
      revert SubmissionsClosed();
    }

    if (msg.value != issue.submissionFee) {
      revert SubmissionFeeNotPaid();
    }

    uint256 submissionId = issue.nextSubmissionId++;
    Submission storage submission = issue.submissions[submissionId];
    submission.submitter = msg.sender;
    issue.collectedSubmissionFees += msg.value;
    emit NewSubmission(_publicationId, _issueId, submissionId, content);
  }
}
