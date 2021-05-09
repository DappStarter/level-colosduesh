require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success stomach response random unveil good private fresh source'; 
let testAccounts = [
"0xede95b93d8113fa7ad35ad6756b31f0339a991a0416226d3161352715de35c34",
"0xd56ce0de2050afc96f0236b91afcd6aeec8419da549d56191ec9966148699c93",
"0xf0140893a9798397d1d8ebffe04e05ba0ef189cb72ef63d4172998eef876d6f2",
"0x17913d3363ccab625548f240ec65a03d4943050fa4462d8bef6c1dece9381435",
"0xce1f39205384d4a350ee83aece8276805d3e69a1ba5ff62e8b1c6a5faa3abf4c",
"0x183c72deaae9c5a82d71befb663865393f5a007be2499e0ca999d8e61540a117",
"0x3db079871f4b5b61a435832db546b4ccac0ac3f50a9a6dc8a2e0b27d6452c431",
"0xc925021624f05dfdb1befa06682409aea8d40ccc6e34be834c6338aa6c74b49f",
"0xfe3daf97884b4157196cc16b94971a8f94c20caa556a7bf90d8c7c0e155abbe0",
"0xbe95c07dc34c76f4df9ff1f5589549d4c82b3856a31868524ed9e095d0f2b612"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
