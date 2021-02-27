const hre = require('hardhat')

async function main() {
	const accounts = await hre.ethers.getSigners()

	const Factory = await hre.ethers.getContractFactory('UniswapV2Factory')
	const factory = await Factory.deploy(accounts[0].address)

	await factory.deployed()
	console.log('Factory deployed to:', factory.address)

	const INIT_CODE_PAIR_HASH = await factory.INIT_CODE_PAIR_HASH()
	console.log('INIT_CODE_PAIR_HASH:', INIT_CODE_PAIR_HASH)

	//bsc_testnet
	// Factory deployed to: 0xC911244cD61290e63A90b8429A5079Fc0428921c
	// INIT_CODE_PAIR_HASH: 0x78f09162e93227e9b60ba10199ebab3d099ac00ebac04f9e1a23ddc35d7f6c21

	//okex_testnet
	// Factory deployed to: 0x4502F7BcC6D4Fd03A50c83EDF18e3B20b9570682
	// INIT_CODE_PAIR_HASH: 0x78f09162e93227e9b60ba10199ebab3d099ac00ebac04f9e1a23ddc35d7f6c21

	//loclhost
	// Factory deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
	// INIT_CODE_PAIR_HASH: 0x78f09162e93227e9b60ba10199ebab3d099ac00ebac04f9e1a23ddc35d7f6c21
	// Factory deployed to: 0x0b27a79cb9C0B38eE06Ca3d94DAA68e0Ed17F953
	// INIT_CODE_PAIR_HASH: 0x549ea8e323dbf0ec220c389564c42bbd7adc056dd3ca8f723671bc6a432ed2b4
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error)
		process.exit(1)
	})