const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");
// Block Devs Contract Address: 0x744F3BB88270Bf31b2aF6CB7b50228bCC5A7d3A7
async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL = METADATA_URL;
  const cryptoDevsContract = await ethers.getContractFactory("BlockDevs");

  const deployedBlockDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  await deployedBlockDevsContract.deployed();
  console.log(
    "Block Devs Contract Address:",
    deployedBlockDevsContract.address
  );
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });