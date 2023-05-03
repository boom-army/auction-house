import lintProgramIdlScript from "@boom-army/formfunction-program-shared/dist/scripts/lintProgramIdlScript";

function lintProgramIdl() {
  lintProgramIdlScript("src/idl/AuctionHouse.ts");
}

lintProgramIdl();
