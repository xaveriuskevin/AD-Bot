import { wallet } from "../../../../data/wallet/wallet.js";
import { privateKeyToAccount } from "viem/accounts";
import { isAddress, parseEther } from "viem";

export default async function handler(req, res) {
  const { to } = req.query;
  if (isAddress(to[0])) {
    const hash = await wallet.sendTransaction({
      account: privateKeyToAccount(
        "0x9a26c0c06188e5c0d16de4e801354de081d5565de7205231bbf56d3d4b4f8a3c"
      ),
      to: to[0],
      value: parseEther(to[1]),
    });

    return res.status(200).json({
      verify: hash,
    });
  } else {
    return res.status(400).json({ result: "invalid Address" });
  }
}
