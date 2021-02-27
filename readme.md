# kingkong-swap-core
### fork from uniswap-v2-periphery, then use hardhat to rebuild
## contracts modify:
1. UniswapV2Factory.sol line 7, add INIT_CODE_PAIR_HASH
2. UniswapV2Pair.sol line 99, use line 100 instead, so we can get the 0.3% fee

## deploy
1. npm i
2. npx hardhat node
3. npx hardhat run scripts/deploy.js --network localhost
### now you have factory deployed, next step turn to kingkong-swap-periphery
### TIP: if you modify UniswapV2Pair.sol, the INIT_CODE_PAIR_HASH will be changed, copy the code into UniswapV2Library.sol of kingkong-swap-periphery

