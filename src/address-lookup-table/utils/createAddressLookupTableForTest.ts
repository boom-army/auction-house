import { Environment } from "@boom-army/formfunction-program-shared";
import { Connection, PublicKey } from "@solana/web3.js";
import handleCreateTable from "address-lookup-table/utils/handleCreateTable";

export default async function createAddressLookupTableForTest(
  connection: Connection
): Promise<PublicKey> {
  const environment = Environment.Local;
  return handleCreateTable(environment, connection);
}
