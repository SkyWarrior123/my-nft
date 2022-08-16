# my-nft
Mint a new NFT while interacting with the smart contract

To mint a new nft follow the procedure:-

Clone the repository

To install all the necessary packages

```
npm install
```
To deploy the contract to the goerli network

```
npx hardhat run scripts/deploy.js --network goerli
```

To finally mint yourown NFT
```
npx hardhat run scripts/mint-nft.js --network goerli
```
