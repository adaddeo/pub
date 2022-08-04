// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.10;

import "forge-std/Test.sol";
import "../Journal.sol";

contract JournalTest is Test {
  Journal private journal;

  function setUp() public {
    journal = new Journal();
  }

  /** submissionFee */

  function testSubmisssionFee() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 0, 1, 100);
    assertEq(journal.submissionFee(0, 0), 100);
  }

  /** issueRewards */

  function testIssueRewards() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 0, 1, 0.01 ether);
    assertEq(journal.issueRewards(0, 0), 0);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
    assertEq(journal.issueRewards(0, 0), 0.01 ether);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
    assertEq(journal.issueRewards(0, 0), 0.02 ether);
  }

  /** submissionsCount */

  function testSubmissionsCount() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 0, 1, 0.01 ether);
    assertEq(journal.submissionsCount(0, 0), 0);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
    assertEq(journal.submissionsCount(0, 0), 1);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
    assertEq(journal.submissionsCount(0, 0), 2);
  }

  /** createIssue */

  function testFailCreateIssueWhenNotPublicationOwner() public {
    journal.createPublication("Journal");
    vm.prank(address(0));
    journal.createIssue(0, 0, 1, 0.01 ether);
  }

  function testCreateIssue() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 0, 1, 0.01 ether);
  }

  /** createSubmission() */

  function testFailSubmitToEmptyJournal() public {
    vm.roll(1);
    journal.createSubmission(0, 0, "poem");
  }

  function testFailSubmitBeforeOpen() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 2, 4, 0.01 ether);
    vm.roll(1);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
  }

  function testFailSubmitAfterOpen() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 2, 4, 0.01 ether);
    vm.roll(5);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
  }

  function testSubmitWhenOnOpen() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 2, 4, 0.01 ether);
    vm.roll(2);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
  }

  function testSubmitWhenOpen() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 2, 4, 0.01 ether);
    vm.roll(3);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
  }

  function testSubmitWhenOnClose() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 2, 4, 0.01 ether);
    vm.roll(4);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
  }

  function testFailSubmitWithoutFee() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 0, 2, 0.01 ether);
    journal.createSubmission(0, 0, "poem");
  }

  function testSubmitWithFee() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 0, 2, 0.01 ether);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
  }

  /** publishIssue */


  function testFailWithoutPermissions() public {
    uint256[] memory submissionIds;
    journal.createPublication("Journal");
    journal.createIssue(0, 0, 2, 0.01 ether);
    vm.prank(address(0));
    journal.publishIssue(0, 0, submissionIds, "issuedata");
  }

  function testFailAlreadyPublishedIssue() public {
    uint256[] memory submissionIds;
    journal.createPublication("Journal");
    journal.createIssue(0, 0, 2, 0.01 ether);
    journal.publishIssue(0, 0, submissionIds, "issuedata");
    journal.publishIssue(0, 0, submissionIds, "issuedata");
  }

  // function testFailInvalidSubmissionIds() public {
  //   vm.expectRevert(InvalidSubmissionId.selector);
  //   uint256[] memory submissionIds = [1];
  //   journal.createPublication("Journal");
  //   journal.createIssue(0, 0, 2, 0.01 ether);
  //   journal.publishIssue(0, 0, submissionIds, "issuedata");
  // }

  function testPublishIssue() public {
    uint256[] memory submissionIds;
    journal.createPublication("Journal");
    journal.createIssue(0, 0, 2, 0.01 ether);
    journal.publishIssue(0, 0, submissionIds, "issuedata");
  }
}
