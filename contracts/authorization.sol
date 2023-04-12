// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol"; 
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract VotingAuthorizationNFT is ERC721 { // , Ownable
    uint256 private _currentTokenId = 1;

    constructor() ERC721("VotingAuthorizationNFT", "VAN") {}

    function authorizeVoter(uint id) public { // public onlyOwner
        //mintVoterNFT(voter);msg.sender
        mintVoterNFT(id);
    }

    function mintVoterNFT(uint id) private { //address voter
        _safeMint(msg.sender, id); //_currentTokenId
        //_safeMint(voter, _currentTokenId);
        //_currentTokenId++;
    }

    function isAuthorizedToVote(address voter, uint256 tokenId) public view returns (bool) {
        return ownerOf(tokenId) == voter;
    }
}