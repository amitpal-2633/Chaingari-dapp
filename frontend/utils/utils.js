import * as anchor from '@project-serum/anchor';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { Chaingari_IDL, Chaingari_PROGRAM_ID } from './const';

// This command makes an Lottery
export function getProgramInstance(
  connection,
  wallet,
) {
  if (!wallet.publicKey) throw new WalletNotConnectedError();

  const provider = new anchor.AnchorProvider(
    connection,
    wallet,
    anchor.AnchorProvider.defaultOptions(),
  );
  // Read the generated IDL.
  const idl = Chaingari_IDL;

  // Address of the deployed program.
  const programId = Chaingari_PROGRAM_ID;

  // Generate the program client from IDL.
  const program = new (anchor).Program(idl, programId, provider);

  return program;
}
