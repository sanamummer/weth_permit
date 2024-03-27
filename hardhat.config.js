require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-foundry");;
require('ethers');
require("@nomicfoundation/hardhat-verify");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    buildbear:{
      url: "https://rpc.dev.buildbear.io/literary-starlord-907951ef"
    }
  },
  etherscan: {
    apiKey: {
      buildbear: "verifyContract",
    },
    customChains: [
      {
        network: "buildbear",
        chainId: 1,
        urls: {
          apiURL: "https://rpc.dev.buildbear.io/verify/etherscan/literary-starlord-907951ef",
          browserURL: "https://explorer.dev.buildbear.io/literary-starlord-907951ef",
        },
      },
    ],
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true,
    url: "https://rpc.dev.buildbear.io/verify/sourcify/server/literary-starlord-907951ef"
  }
};
