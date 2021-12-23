// node deploy_buffer_nervos_testnet_phase2.js

// Phase 2 : Staking and Pool
const { deployContract, addressTranslator } = require("./utils");

// IBFR
const ibfrAddress = addressTranslator(
  "0x66Ca22fF69bb25A54FDdcf22BcfBFb3Be43d5943"
);

(async () => {
  // Staking
  const stakingBNBContract = await deployContract("BufferStakingBNB.json", [
    ibfrAddress,
  ]);

  // Pool
  const bufferBNBPool = await deployContract("BufferBNBPool.json", []);
})();
