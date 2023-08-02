import { createWalletClient, http } from "viem";
import { goerli } from "viem/chains";

export const wallet = createWalletClient({
  chain: goerli,
  transport: http(),
});
