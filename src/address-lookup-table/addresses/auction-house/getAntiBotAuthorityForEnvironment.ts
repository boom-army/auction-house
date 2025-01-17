import {
  ANTI_BOT_DEV_AUTHORITY,
  ANTI_BOT_MAINNET_AUTHORITY,
  assertUnreachable,
  Environment,
} from "@boom-army/boom-program-tools";
import { PublicKey } from "@solana/web3.js";

export default function getAntiBotAuthorityForEnvironment(
  environment: Environment
): PublicKey {
  switch (environment) {
    case Environment.Local:
    case Environment.Testnet:
    case Environment.Development:
      return ANTI_BOT_DEV_AUTHORITY;
    case Environment.Production:
      return ANTI_BOT_MAINNET_AUTHORITY;
    default: {
      return assertUnreachable(environment);
    }
  }
}
