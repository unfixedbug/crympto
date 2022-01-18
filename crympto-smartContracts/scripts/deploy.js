// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat

const main = async () => {
  // We get the contract to deploy
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transaction = await Transactions.deploy();

  await transaction.deployed();

  console.log("Transactions deployed to:", transaction.address);
};

const runMain = async () => {
  try {
    await main();

    // notate that process has completed successfully
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();


// transaction deployment code 0x2ECC4E92cf33F0d9Bb73068D01Ee005750D3EB1A