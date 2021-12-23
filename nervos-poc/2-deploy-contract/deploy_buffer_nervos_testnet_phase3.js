// node deploy_buffer_nervos_testnet_phase3.js

// Phase 3 : BNB Options
const { deployContract, addressTranslator } = require("./utils");

// IBFR
const ibfrAddress = addressTranslator(
  "0x66Ca22fF69bb25A54FDdcf22BcfBFb3Be43d5943"
);

// Staking
const stakingAddress = addressTranslator(
  "0xa5414a28f4337555c82Fa211188657330AB73e20"
);

// Pool
const poolAddress = addressTranslator(
  "0x075Dbc0e36eAbcAC7e9eBa9d3e261370F32434cA"
);

(async () => {
  // PriceProvider
  const pp = addressTranslator("0x0bB0Cafd6cE6a54C82dF15F19F79f6BC7369116F");
  // const pp = await deployContract("FakePriceProvider.json", [2001000]);
  console.log({ pp, stakingAddress, poolAddress });
  const optionsContract = await deployContract("BufferBNBOptions.json", [
    pp,
    stakingAddress,
    poolAddress,
  ]);
  console.log({ optionsContract });
})();
