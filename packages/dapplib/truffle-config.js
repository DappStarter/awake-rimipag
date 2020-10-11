require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski strong cruise remember come gesture define army giggle'; 
let testAccounts = [
"0x1f834b36a67cb0fd8e5135dec0bca176e30e59dcd4c0c06d7c4f4bcec9c8b4b8",
"0x173b944a1b25d802c047f579a7f07b993d867e27d0e02c371d9753313400294b",
"0x9b49183454523ba9d76244f96d996051cacd1f3186177590d04a694077774340",
"0x54acbe5e34ea333ad72bb5cda730d7e2e2a3c412a390243f7143de63609417ab",
"0x7bbccf9092d890c4475733a9d4bd6592e58ce407b6df616c09a8cb6bb8703550",
"0xc232d8cee00d10aefd12f30ade5012766f65a752ca41010c184219d6aee36319",
"0x04b2dd3a071ecc8c4de9dfe4c7efcb477793955454d77406a6a741a2ffdb0ec9",
"0xaa599d88ab0c694e2616d7042d58106c3ba0f065c83470a1ad3346e8ac6d48a0",
"0xfff4efd301a61e8b40063987d3a8597cf0b6b9b6d764bf2de3eabb7ef9f4bca0",
"0xd7215c8c189d9705d7d20486eb485ccdf5924144df7e10be5cbcf0c058667264"
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
