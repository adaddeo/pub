// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.10;

import "forge-std/Test.sol";
import "../Publication.sol";

contract PublicationTest is Test {
  Publication private publication;

  function setUp() public {
    publication = new Publication();
  }

  /** submissionFee */

  function testSubmisssionFee() public {
    publication.createIssue(0, 1, 100);
    assertEq(publication.submissionFee(0), 100);
  }

  /** issueRewards */

  function testIssueRewards() public {
    publication.createIssue(0, 1, 0.01 ether);
    assertEq(publication.issueRewards(0), 0);
    publication.createSubmission{value: 0.01 ether}(0, "poem");
    assertEq(publication.issueRewards(0), 0.01 ether);
    publication.createSubmission{value: 0.01 ether}(0, "poem");
    assertEq(publication.issueRewards(0), 0.02 ether);
  }

  /** submissionsCount */

  function testSubmissionsCount() public {
    publication.createIssue(0, 1, 0.01 ether);
    assertEq(publication.submissionsCount(0), 0);
    publication.createSubmission{value: 0.01 ether}(0, "poem");
    assertEq(publication.submissionsCount(0), 1);
    publication.createSubmission{value: 0.01 ether}(0, "poem");
    assertEq(publication.submissionsCount(0), 2);
  }

  /** createIssue */

  function testFailCreateIssueWhenNotPublicationOwner() public {
    vm.prank(address(0));
    publication.createIssue(0, 1, 0.01 ether);
  }

  function testCreateIssue() public {
    publication.createIssue(0, 1, 0.01 ether);
  }

  /** createSubmission() */

  function testFailSubmitToEmptypublication() public {
    vm.roll(1);
    publication.createSubmission(0, "poem");
  }

  function testFailSubmitBeforeOpen() public {
    publication.createIssue(2, 4, 0.01 ether);
    vm.roll(1);
    publication.createSubmission{value: 0.01 ether}(0, "poem");
  }

  function testFailSubmitAfterOpen() public {
    publication.createIssue(2, 4, 0.01 ether);
    vm.roll(5);
    publication.createSubmission{value: 0.01 ether}(0, "poem");
  }

  function testSubmitWhenOnOpen() public {
    publication.createIssue(2, 4, 0.01 ether);
    vm.roll(2);
    publication.createSubmission{value: 0.01 ether}(0, "poem");
  }

  function testSubmitWhenOpen() public {
    publication.createIssue(2, 4, 0.01 ether);
    vm.roll(3);
    publication.createSubmission{value: 0.01 ether}(0, "poem");
  }

  function testSubmitWhenOnClose() public {
    publication.createIssue(2, 4, 0.01 ether);
    vm.roll(4);
    publication.createSubmission{value: 0.01 ether}(0, "poem");
  }

  function testFailSubmitWithoutFee() public {
    publication.createIssue(0, 2, 0.01 ether);
    publication.createSubmission(0, "poem");
  }

  function testSubmitWithFee() public {
    publication.createIssue(0, 2, 0.01 ether);
    publication.createSubmission{value: 0.01 ether}(0, "poem");
    publication.createSubmission{value: 0.01 ether}(0, "poem");
  }

  /** publishIssue */


  function testFailPublishIfNotOwner() public {
    uint256[] memory submissionIds;
    publication.createIssue(0, 2, 0.01 ether);
    vm.prank(address(0));
    publication.publishIssue(0, submissionIds, "issuedata");
  }

  function testCannotPublishAlreadyPublishedIssue() public {
    uint256[] memory submissionIds;
    publication.createIssue(0, 2, 0.01 ether);
    publication.publishIssue(0, submissionIds, "issuedata");
    vm.expectRevert(Publication.IssueAlreadyPublished.selector);
    publication.publishIssue(0, submissionIds, "issuedata");
  }

  // function testFailInvalidSubmissionIds() public {
  //   vm.expectRevert(InvalidSubmissionId.selector);
  //   uint256[] memory submissionIds = [1];
  //   publication.createPublication("publication");
  //   publication.createIssue(0, 0, 2, 0.01 ether);
  //   publication.publishIssue(0, 0, submissionIds, "issuedata");
  // }

  function testPublishIssue() public {
    uint256[] memory submissionIds;
    publication.createIssue(0, 2, 0.01 ether);
    publication.publishIssue(0, submissionIds, "issuedata");
  }
}
