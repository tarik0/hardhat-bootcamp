
import { ContractFactory, Signer } from "ethers";
import { ethers } from "hardhat";

describe("SimpleNFT", function() {
    let SimpleNFT: ContractFactory
    let simpleNFT: any;
    let signers: Signer[]

    beforeEach(async function() {
        SimpleNFT = await ethers.getContractFactory("SimpleNFT");
        signers = await ethers.getSigners();
        simpleNFT = await SimpleNFT.deploy();
    });

    it("Should mint a new NFT to an address", async function() {
        // ...
    });

    it("Should set the right baseURI", async function() {
        // ...
    });

    it("Should not allow non-owners to mint", async function() {
        // ...
    });
});