import modifyProgramIdlScript from "@boom-army/formfunction-program-shared/dist/scripts/modifyProgramIdlScript";

modifyProgramIdlScript({
  decodedTransactionResultTypeFilePath:
    "src/types/DecodedAuctionHouseTransactionResult.ts",
  idlFilePath: "src/idl/AuctionHouse.ts",
  programName: "AuctionHouse",
});
