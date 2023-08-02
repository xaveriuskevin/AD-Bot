import { privateKeyToAccount } from "viem/accounts";
import { createWalletClient, http, parseEther } from "viem";
import { arbitrumGoerli, goerli } from "viem/chains";

const wallet = createWalletClient({
  chain: goerli,
  transport: http(),
});

const hash = await wallet.sendTransaction({
  data: "0x439370b1",
  account: privateKeyToAccount(
    "0x9a26c0c06188e5c0d16de4e801354de081d5565de7205231bbf56d3d4b4f8a3c"
  ),
  to: "0xf5077c7ad8af0dffe5c17b397caf94582306fd5c",
  value: parseEther("0.00000000000000000000000000000000000000001"),
});

export default function handler(req, res) {
  return res.status(200).json({
    verify: hash,
  });
}
