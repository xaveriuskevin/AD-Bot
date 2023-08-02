import { encodeFunctionData } from "viem";
import { schrodingerDog } from "../ABI/schrodingerdog.js";

module.exports.encodeTransactionSchrodinger = (qty) =>
  new Promise(async (resolve, reject) => {
    const encoding = encodeFunctionData({
      abi: schrodingerDog,
      functionName: "ownerMint",
      args: [qty],
    });

    return resolve(encoding);
  });
