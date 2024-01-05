

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {

  networks: {
    pulse: {
      provider: () => new HDWalletProvider('', 'https://rpc.pulsechain.com'),
      network_id: 369,
      confirmations: 3,
      timeoutBlocks: 20,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },
  // Configure your compilers
  compilers: {
    solc: {
        version: '0.6.6',
        settings: {
            optimizer: {
                enabled: true,
                runs: 999999,
            }
        }
    },
},
plugins: [
  'truffle-plugin-verify'
],
api_keys: {
  etherscan: '0' // this is dummy API key, PulseScan doesn't need any, but it's required by truffle-plugin-verify.

},
};
