// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.10;

import "ds-test/test.sol";
import "../Journal.sol";

interface CheatCodes {
  function prank(address) external;
  function roll(uint256) external;
}

contract JournalTest is DSTest {
  CheatCodes constant cheats = CheatCodes(HEVM_ADDRESS);
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

  /** collectedSubmissionFees */

  function testCollectedSubmisssionFees() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 0, 1, 0.01 ether);
    assertEq(journal.collectedSubmissionFees(0, 0), 0);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
    assertEq(journal.collectedSubmissionFees(0, 0), 0.01 ether);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
    assertEq(journal.collectedSubmissionFees(0, 0), 0.02 ether);
  }

  /** distributedSubmissionFees */

  function testDistributedSubmisssionFees() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 0, 1, 0.01 ether);
    assertEq(journal.distributedSubmissionFees(0, 0), 0);
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
    cheats.prank(address(0));
    journal.createIssue(0, 0, 1, 0.01 ether);
  }

  function testCreateIssue() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 0, 1, 0.01 ether);
  }

  /** createSubmission() */

  function testFailSubmitToEmptyJournal() public {
    cheats.roll(1);
    journal.createSubmission(0, 0, "poem");
  }

  function testFailSubmitBeforeOpen() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 2, 4, 0.01 ether);
    cheats.roll(1);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
  }

  function testFailSubmitAfterOpen() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 2, 4, 0.01 ether);
    cheats.roll(5);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
  }

  function testSubmitWhenOnOpen() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 2, 4, 0.01 ether);
    cheats.roll(2);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
  }

  function testSubmitWhenOpen() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 2, 4, 0.01 ether);
    cheats.roll(3);
    journal.createSubmission{value: 0.01 ether}(0, 0, "poem");
  }

  function testSubmitWhenOnClose() public {
    journal.createPublication("Journal");
    journal.createIssue(0, 2, 4, 0.01 ether);
    cheats.roll(4);
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
}
