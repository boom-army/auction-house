import {
  PdaResult,
  TOKEN_METADATA_PROGRAM_ID,
} from "@boom-army/boom-program-tools";
import { PublicKey } from "@solana/web3.js";

export default function findTokenRecordPda(
  mint: PublicKey,
  token: PublicKey
): PdaResult {
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from("metadata"),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      mint.toBuffer(),
      Buffer.from("token_record"),
      token.toBuffer(),
    ],
    TOKEN_METADATA_PROGRAM_ID
  );
}
