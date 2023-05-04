import lintProgramIdlScript from "@boom-army/boom-program-tools/dist/scripts/lintProgramIdlScript";

function lintProgramIdl() {
  lintProgramIdlScript("src/idl/AuctionHouse.ts");
}

lintProgramIdl();
