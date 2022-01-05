// https://eth-ropsten.alchemyapi.io/v2/YAIh9V_C5t7qyPal5WsaAVqQLyjJs6cj

require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/YAIh9V_C5t7qyPal5WsaAVqQLyjJs6cj',
      accounts: [ `9148729e79a19e8f2f623b6aefb16b2d1edd0fd57a8b8d5e4164e4b7faead7ae` ]
    }
  }
}