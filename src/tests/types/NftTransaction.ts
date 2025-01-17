import { MaybeUndef } from "@boom-army/boom-program-tools";
import NftTransactionType from "tests/types/enums/NftTransactionType";

type NftTransaction = {
  blockTime: MaybeUndef<number>;
  fromAddress: string;
  mint: string;
  priceInLamports?: string;
  toAddress: string;
  txid: string;
  type: NftTransactionType;
};

export default NftTransaction;
