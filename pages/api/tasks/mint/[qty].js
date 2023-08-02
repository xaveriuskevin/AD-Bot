import { wallet } from "../../../../data/wallet/wallet.js";
import { privateKeyToAccount } from "viem/accounts";
const encode = require("../../../../data/encode/encode.js");

export default async function handler(req, res) {
  const { qty } = req.query;
  const hash = await wallet.sendTransaction({
    data: await encode.encodeTransactionSchrodinger(qty),
    account: privateKeyToAccount(
      "0x9a26c0c06188e5c0d16de4e801354de081d5565de7205231bbf56d3d4b4f8a3c"
    ),
    to: "0xB266B98Cb4cc460f848e9D588b0A1C47dA0A61Af",
  });
  return res.status(200).json({
    verify: hash,
  });
}
