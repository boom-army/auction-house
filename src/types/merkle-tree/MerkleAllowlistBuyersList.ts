import { MerkleTree } from "@boom-army/boom-program-tools";
import MerkleAllowlistBuyerWithProof from "types/merkle-tree/MerkleAllowlistBuyerWithProof";

type MerkleAllowlistBuyersList = {
  buyersChunk: Array<MerkleAllowlistBuyerWithProof>;
  tree: MerkleTree;
};

export default MerkleAllowlistBuyersList;
