const hre = require('hardhat')
const fs = require('fs')

async function main() {
    let file = fs.readFileSync('./artifacts/contracts/UniswapV2Pair.sol/UniswapV2Pair.json')
    let bytecode = JSON.parse(file.toString()).bytecode

    let hex = ethers.utils.keccak256(bytecode)
    console.log('hex', hex)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })