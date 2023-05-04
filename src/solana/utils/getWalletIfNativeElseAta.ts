import {
  findAtaPda,
  isMintNative,
} from "@boom-army/boom-program-tools";
import { PublicKey } from "@solana/web3.js";

export default async function getWalletIfNativeElseAta(
  wallet: PublicKey,
  treasuryMint: PublicKey
) {
  if (isMintNative(treasuryMint)) {
    return wallet;
  }

  const [ata] = findAtaPda(wallet, treasuryMint);
  return ata;
}
