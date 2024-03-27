# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

forge create --rpc-url https://rpc.dev.buildbear.io/literary-starlord-907951ef \
--private-key 670e8f5f547a3bc4bd1869d473591ff10f6cf0d69a254257b61eca3f244ef188 \
src/WETH.sol:WETH \
--verify --verifier sourcify \
--verifier-url https://rpc.dev.buildbear.io/verify/sourcify/server/literary-starlord-907951ef
