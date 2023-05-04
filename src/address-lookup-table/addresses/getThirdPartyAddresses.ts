import { TOKEN_METADATA_PROGRAM_ID } from "@boom-army/boom-program-tools";
import { PublicKey } from "@solana/web3.js";

const ADDRESSES = [TOKEN_METADATA_PROGRAM_ID];

export default function getThirdPartyAddresses(): Array<PublicKey> {
  return ADDRESSES;
}
