require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-foundry");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    buildbear:{
      url: "https://rpc.dev.buildbear.io/literary-starlord-907951ef"
    }
  },
 
};
