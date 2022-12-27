import { ethers } from "hardhat";

const totalSupply = 100_000_000;
const blockReward = 50;

async function main() {
  const CatToken = await ethers.getContractFactory("CatToken");
  const catToken = await CatToken.deploy(totalSupply, blockReward);

  await catToken.deployed();

  console.log("Cat Token deployed: ", catToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
