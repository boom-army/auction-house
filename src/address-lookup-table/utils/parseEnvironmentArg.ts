import {
  Environment,
  MaybeUndef,
} from "@boom-army/boom-program-tools";

export default function parseEnvironmentArg(
  environment: MaybeUndef<string>
): Environment {
  switch (environment) {
    case "local":
      return Environment.Local;
    case "devnet":
      return Environment.Development;
    case "testnet":
      return Environment.Testnet;
    case "mainnet":
      return Environment.Production;
    default: {
      throw new Error(
        `Invalid environment argument supplied, received: ${environment}.`
      );
    }
  }
}
