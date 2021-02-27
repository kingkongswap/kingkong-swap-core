# kingkong-swap-core
### fork from uniswap-v2-periphery, then use hardhat to rebuild
### contracts modify:
1. UniswapV2Factory.sol line 7, add INIT_CODE_PAIR_HASH for testing
2. UniswapV2Pair.sol line 99, use line 100 instead, so we can get the 0.3% fee
