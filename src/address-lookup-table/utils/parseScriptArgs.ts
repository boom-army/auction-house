import {
  Environment,
  Maybe,
  MaybeUndef,
  stringToPublicKey,
} from "@boom-army/boom-program-tools";
import { PublicKey } from "@solana/web3.js";
import parseEnvironmentArg from "address-lookup-table/utils/parseEnvironmentArg";
import yargs from "yargs";

type Options = {
  environment: Environment;
  saveTableAddressFilename: MaybeUndef<string>;
  tableAddress: Maybe<PublicKey>;
};

export default function parseScriptArgs(): Options {
  const { environment, saveTableAddressFilename, tableAddress } = yargs(
    process.argv.slice(2)
  )
    .options({
      environment: {
        default: "devnet",
        type: "string",
      },
      saveTableAddressFilename: {
        type: "string",
      },
      tableAddress: {
        type: "string",
      },
    })
    .parseSync();

  const tableAddressPublicKey = stringToPublicKey(tableAddress);
  if (tableAddress != null && tableAddressPublicKey == null) {
    throw new Error(
      `Invalid tableAddress provided, must be a valid PublicKey. Received: ${tableAddress}`
    );
  }

  return {
    environment: parseEnvironmentArg(environment),
    saveTableAddressFilename,
    tableAddress: tableAddressPublicKey,
  };
}
