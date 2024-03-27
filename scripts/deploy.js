const { ethers } = require('hardhat');
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-foundry");;
require('ethers');
require("@nomicfoundation/hardhat-verify");
// Deploy function
async function deploy() {
    [account] = await ethers.getSigners();
    deployerAddress = account.address;
    console.log(`Deploying contracts using ${deployerAddress}`);
    const token = await ethers.getContractFactory('ERC20BankExploitTest');
    const tokenInstance = await token.deploy();
    console.log(`contract deployed to ${tokenInstance.address}`);

}

deploy()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });