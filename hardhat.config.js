require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
	const accounts = await ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	defaultNetwork: 'hardhat',
	networks: {
		hardhat: {

		},
		okex_testnet: {
			url: 'http://39.103.147.63:26659',
			// url: 'http://okexchaintest.okexcn.com:26659',
		}
	},
	solidity: "0.5.16",
};