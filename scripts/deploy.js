const hre = require('hardhat')

async function main() {
	const accounts = await hre.ethers.getSigners()

	const Factory = await hre.ethers.getContractFactory('UniswapV2Factory')
	const factory = await Factory.deploy(accounts[0].address)

	await factory.deployed()
	console.log('Factory deployed to:', factory.address)

	const INIT_CODE_PAIR_HASH = await factory.INIT_CODE_PAIR_HASH()
	console.log('INIT_CODE_PAIR_HASH:', INIT_CODE_PAIR_HASH)

	await factory.setFeeTo(accounts[1].address)
	await delay(10)
    console.log('factory.setFeeTo', await factory.feeTo())
}

async function delay(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, sec * 1000);
    })
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error)
		process.exit(1)
	})