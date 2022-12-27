import { ethers } from "hardhat";

async function main() {
  const Faucet = await ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy(process.env.TOKEN_ADDRESS);

  await faucet.deployed();

  console.log("Faucet contract deployed: ", faucet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
