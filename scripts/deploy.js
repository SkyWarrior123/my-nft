async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT");

    // Deploying the instance of the contract
    const mynft = await MyNFT.deploy();
    console.log("Deployed the smart contract to the address: ", mynft.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })

// Contract address :  0x81b3eDA6dE132e3289a8792a9eD053d2b9B5096b
// NFT Contract adress = 0xf0e920d317b350ff9fb25721704e93c515bc5fbbdcec54e706ef6362b42b0484

// Contract address 2: - 0x81b3eda6de132e3289a8792a9ed053d2b9b5096b
// NFT Contract address = 