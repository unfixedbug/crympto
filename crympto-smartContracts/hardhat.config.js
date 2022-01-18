// https://eth-ropsten.alchemyapi.io/v2/tFw2UtNtzr28Tt8d0io1u5oiGP4RzZH8    <- key ropsten

// using hardhat waffle

require('@nomiclabs/hardhat-waffle');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>

  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/tFw2UtNtzr28Tt8d0io1u5oiGP4RzZH8',
      accounts: ['e7d238efc64c592e173e5f0e014d85fb46a40667bdf7a874a2ce2769b7d0a17b']
    }
  }
}

// to run -> npx hardhat run scripts/deploy.js --network ropsten