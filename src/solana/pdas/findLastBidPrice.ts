import { PdaResult } from "@boom-army/boom-program-tools";
import { PublicKey } from "@solana/web3.js";
import { LAST_BID_PRICE } from "constants/SolanaConstants";
import getSolAuctionHouseAccountByProgramId from "solana/auction-house/getSolAuctionHouseAccountByProgramId";

export default function findLastBidPrice(
  mint: PublicKey,
  auctionHouseProgramId: PublicKey
): PdaResult {
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from(LAST_BID_PRICE),
      getSolAuctionHouseAccountByProgramId(auctionHouseProgramId).toBuffer(),
      mint.toBuffer(),
    ],
    auctionHouseProgramId
  );
}
