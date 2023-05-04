import { Environment } from "@boom-army/boom-program-tools";
import { Connection } from "@solana/web3.js";
import getRpcFromEnvironment from "address-lookup-table/utils/getRpcFromEnvironment";

export default function getConnectionForTest(): Connection {
  return new Connection(getRpcFromEnvironment(Environment.Local), "processed");
}
