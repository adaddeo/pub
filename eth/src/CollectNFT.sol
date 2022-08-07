
// // SPDX-License-Identifier: MIT

// pragma solidity ^0.8.0;

// import "openzeppelin-contracts/contracts/token/ERC1155/IERC1155.sol";

// contract CollectNFT is IERC1155 {

//     struct IssueConfig {
//       address publicationContract;
//       address pricingContract;

//       // Mapping from submission to token ID to owner address
//       mapping(uint256 => mapping(uint256 => address)) _owners;
//     }

//     // mapping from publication => issue ID to issue nft metadata
//     mapping(address => mapping(uint256 => IssueConfig)) _issueConfigs;

//     function registerIssue(address _publicationContract, address _pricingContract) external {

//     }

//     /**
//      * @dev Creates `amount` new tokens for `to`, of token type `id`.
//      *
//      * See {ERC1155-_mint}.
//      *
//      * Requirements:
//      *
//      * - the caller must have the `MINTER_ROLE`.
//      */
//     function mint(
//       address _to,
//       uint256 _publicationId,
//       uint256 _issueId,
//       uint256 _submissionId
//     ) public virtual {
//       // mint NFT for work with nextWorkId
//       // payable add funds to submitters claimable rewards
//       // how much does the collectible cost?
//      }

// }
