import { PdaResult } from "@boom-army/boom-program-tools";
import { PublicKey } from "@solana/web3.js";
import { AUCTION_HOUSE, TREASURY } from "constants/SolanaConstants";

export default function findAuctionHouseTreasuryAccount(
  auctionHouse: PublicKey,
  auctionHouseProgramId: PublicKey
): PdaResult {
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from(AUCTION_HOUSE),
      auctionHouse.toBuffer(),
      Buffer.from(TREASURY),
    ],
    auctionHouseProgramId
  );
}
