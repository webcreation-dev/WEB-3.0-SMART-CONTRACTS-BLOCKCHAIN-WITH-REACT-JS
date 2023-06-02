require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/NMgd_jvZNnK_O36OD-Dy13CSaQ3FAwmF',
      accounts: ['6ed24297fe8eea759a41f41f6535cde5d668ebbabfaf059a08b86b61cadb735d'],
    },
  },
};