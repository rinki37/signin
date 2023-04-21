
const { log } = require('console');
const express = require('express');
const nearAPI = require('near-api-js');
const app = express();
const path = require("path");
const homedir = require("os").homedir();

let k ;
const HELP = `Please run this script in the following format:
    node app.js CREATOR_ACCOUNT.testnet NEW_ACCOUNT.testnet AMOUNT Then open your localhost and open the port mentioned.
`;
app.get('/', (req, res) => {
    
  res.send(main());
});

app.post('/', (req, res) => {
  res.send(check(k));
})

app.listen(3000, () => {
  console.log('App listening on port 3000');
});

async function main(){
const { connect, KeyPair, keyStores, utils } = nearAPI;
const CREDENTIALS_DIR = ".near-credentials";
const credentialsPath = path.join(homedir, CREDENTIALS_DIR);
const keyStore = new keyStores.UnencryptedFileSystemKeyStore(credentialsPath);

const config = {
  keyStore,
  networkId: "testnet",
  nodeUrl: "https://rpc.testnet.near.org",
};

if (process.argv.length !== 5) {
  console.info(HELP);
  process.exit(1);
}
//generating neccessary things for account creation.
const { parseSeedPhrase, generateSeedPhrase } = require('near-seed-phrase');

// to create a seed phrase with its corresponding Keys
const {seedPhrase, publicKey, secretKey} = generateSeedPhrase()
//printing pass phrase, public key and secretkey.
console.log(seedPhrase);
console.log(publicKey);
console.log(secretKey);
}
