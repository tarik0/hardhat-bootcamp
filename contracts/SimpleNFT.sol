// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// IPFS Provider: https://thirdweb.com/dashboard/infrastructure/storage

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SimpleNFT is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("SimpleNFT", "SNFT") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://..../";
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }
}
