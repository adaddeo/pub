
// // SPDX-License-Identifier: UNLICENSED

// pragma solidity ^0.8.0;

// import "openzeppelin-contracts/contracts/access/Ownable.sol";
// import "openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol";

// contract Publication is Ownable {
//   event IssuePublished(uint256 indexed issueId, uint256[] _submissionIds, string data);
//   event NewPublication(string title);
//   event NewIssue(uint256 issueId);
//   event NewSubmission(uint256 indexed issueId, uint256 submissionId, string content);

//   uint256 private nextIssueId;
//   mapping(uint256 => Issue) private issues;

//   // TODO centralize for claiming across publications
//   mapping(address => uint256) private unclaimedRewards;

//   struct Issue {
//     uint256 submissionsOpenBlock;
//     uint256 submissionsCloseBlock;
//     uint256 publishedAt;
//     uint256 submissionFee;
//     uint256 rewards;

//     uint256 nextSubmissionId;
//     mapping(uint256 => Submission) submissions;

//     uint256 nextContentId;
//     mapping(uint256 => Submission) contents;
//   }

//   struct Submission {
//     address submitter;
//   }

//   /** queries */

//   function submissionFee(uint256 _issueId) external view returns (uint256) {
//     return issues[_issueId].submissionFee;
//   }

//   function issueRewards(uint256 _issueId) external view returns (uint256) {
//     return issues[_issueId].rewards;
//   }

//   function submissionsCount(uint256 _issueId) external view returns (uint256) {
//     return issues[_issueId].nextSubmissionId;
//   }

//   /** commands */

//   function createIssue(
//     uint256 _submissionsOpenBlock,
//     uint256 _submissionsCloseBlock,
//     uint256 _submissionFee
//   ) external onlyOwner {
//     uint256 issueId = nextIssueId++;
//     Issue storage nextIssue = issues[issueId];
//     nextIssue.submissionsOpenBlock = _submissionsOpenBlock;
//     nextIssue.submissionsCloseBlock = _submissionsCloseBlock;
//     nextIssue.submissionFee = _submissionFee;
//     // setup NFT?
//     emit NewIssue(issueId);
//   }

//   function createSubmission(uint256 _issueId, string calldata content) external payable {
//     Issue storage issue = issues[_issueId];

//     if (block.number < issue.submissionsOpenBlock || block.number > issue.submissionsCloseBlock) {
//       revert SubmissionsClosed();
//     }

//     if (msg.value != issue.submissionFee) {
//       revert SubmissionFeeNotPaid();
//     }

//     uint256 submissionId = issue.nextSubmissionId++;
//     Submission storage submission = issue.submissions[submissionId];
//     submission.submitter = msg.sender;
//     issue.rewards += msg.value;
//     emit NewSubmission(_issueId, submissionId, content);
//   }

//   function publishIssue(uint256 _issueId, uint256[] calldata _submissionIds, string calldata data) external onlyOwner {
//     Issue storage issue = publication.issues[_issueId];
//     if (issue.publishedAt != 0) {
//       revert IssueAlreadyPublished();
//     }
//     issue.publishedAt  = block.timestamp;
//     uint256 length = _submissionIds.length;
//     for (uint256 i = 0; i < length;) {
//       Submission storage submission = issue.submissions[_submissionIds[i]];
//       if (submission.submitter == address(0)) {
//         revert InvalidSubmissionId(_submissionIds[i]);
//       }
//       unclaimedRewards[submission.submitter] += issue.rewards / length;
//       unchecked { ++i; }
//     }
//     // should the content be stored in log or storage?
//     // also include
//     emit IssuePublished(_issueId, _submissionIds, data);
//   }

//   error InvalidSubmissionId(uint256 submissionId);
//   error IssueAlreadyPublished();
//   error SubmissionFeeNotPaid();
//   error SubmissionsClosed();
// }
