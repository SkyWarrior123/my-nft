const API_URL = "https://eth-goerli.g.alchemy.com/v2/TiFHXrNILfe2Xzmo8COXklPtbrAUaVge"
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const PUBLIC_KEY = "0x7C7945E06c7484530C090aDbF272150D05042161";
const PRIVATE_KEY = "eef881b2f30e51daa1848f65161984b725fbf4866d461f5380aa2909edc1cf1e";


const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

console.log(JSON.stringify(contract.abi));

const contractAddress = "0x81b3eDA6dE132e3289a8792a9eD053d2b9B5096b";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);


// create transaction
async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce
  
    //the transaction
    const tx = {
      from: PUBLIC_KEY,
      to: contractAddress,
      nonce: nonce,
      gas: 500000,
      data: nftContract.methods.mint(PUBLIC_KEY, tokenURI).encodeABI(),
    };
  
    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    signPromise
      .then((signedTx) => {
        web3.eth.sendSignedTransaction(
          signedTx.rawTransaction,
          function (err, hash) {
            if (!err) {
              console.log(
                "The hash of your transaction is: ",
                hash,
                "\nCheck Alchemy's Mempool to view the status of your transaction!"
              );
            } else {
              console.log(
                "Something went wrong when submitting your transaction:",
                err
              );
            }
          }
        );
      })
      .catch((err) => {
        console.log(" Promise failed:", err);
    });
}

mintNFT(
    "https://gateway.pinata.cloud/ipfs/QmcFMXi73ucu1rpQ35Xqmqa9tXWXcFYxWeifQqhUFDEjmt"
);





