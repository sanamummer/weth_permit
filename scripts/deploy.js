const { ethers } = require('hardhat');
require('ethers');
// Deploy function
async function deploy() {
    [account] = await ethers.getSigners();
    deployerAddress = account.address;
    console.log(`Deploying contracts using ${deployerAddress}`);
    const token = await ethers.getContractFactory('WETH');
    const tokenInstance = await token.deploy();
   
  

}

deploy()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });