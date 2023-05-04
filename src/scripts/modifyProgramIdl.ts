import modifyProgramIdlScript from "@boom-army/boom-program-tools/dist/scripts/modifyProgramIdlScript";

modifyProgramIdlScript({
  decodedTransactionResultTypeFilePath:
    "src/types/DecodedAuctionHouseTransactionResult.ts",
  idlFilePath: "src/idl/AuctionHouse.ts",
  programName: "AuctionHouse",
});
