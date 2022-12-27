import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      chainId: 5,
      accounts: [process.env.PRIVATE_KEY!],
      url: process.env.INFURA_GOERLI_ENDPOINT,
    },
  },
};

export default config;
