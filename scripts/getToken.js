const hre = require('hardhat')
const fs = require('fs')
const { BigNumber } = require('ethers')

var accounts = null

async function main() {
    accounts = await hre.ethers.getSigners()
    
    let factoryAbi = getAbi('./artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json')
    let factoryAddress = '0x69268B5859E0E1081254ECe7399449685235047d'
    const factory = new ethers.Contract(factoryAddress, factoryAbi, accounts[0])

    //查看池子
    let allPairsLength = await factory.allPairsLength()
    console.log('allPairsLength:', allPairsLength.toNumber())
    
    let pairAbi = getAbi('./artifacts/contracts/UniswapV2Pair.sol/UniswapV2Pair.json')
    let ercAbi = getAbi('./artifacts/contracts/test/ERC20.sol/ERC20.json')
    for (let i=0; i<allPairsLength.toNumber(); i++) {
        let pairAddress = await factory.allPairs(i)
        let pair = new ethers.Contract(pairAddress, pairAbi, accounts[0])

        let token0Address = await pair.token0()
        let erc0 = new ethers.Contract(token0Address, ercAbi, accounts[0])

        let token1Address = await pair.token1()
        let erc1 = new ethers.Contract(token1Address, ercAbi, accounts[0])
        
        
        console.log('pair:', pairAddress, token0Address, await erc0.symbol(), token1Address, await erc1.symbol())
    }

    console.log('done')
}


function getAbi(jsonPath) {
    let file = fs.readFileSync(jsonPath)
    let abi = JSON.parse(file.toString()).abi
    return abi
}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })