import { expect } from 'chai';
import { ethers } from 'hardhat';
import {
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe('MyToken', function () {
    async function deployToken() {
        const signers = await ethers.getSigners();
        const Token = await ethers.getContractFactory("MyToken");
        const token = await Token.deploy();
        return { Token, token, signers }
    }

    it('Should have the correct name, symbol, and decimals', async function () {
        const {Token, token} = await loadFixture(deployToken);

        expect(await token.name()).to.eq("MyToken");
        expect(await token.symbol()).to.eq("MTK");
        expect(await token.decimals()).to.eq(18);
    });

    it('Should mint initial supply to the owner', async function () {
        const {Token, token, signers} = await loadFixture(deployToken);

        let ownerBalance = await token.balanceOf(await signers[0].getAddress());
        expect(ownerBalance).to.eq(ethers.parseEther("30"));
    });
});
