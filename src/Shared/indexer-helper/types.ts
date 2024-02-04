import { Protocol_Symbol } from "./config";

export enum ValidMethods {
  deploy = "deploy",
  mint = "mint",
  transfer = "transfer0",
  inscribe_transfer = "transfer",
}

export enum BalanceUpdateTypes {
  PUSH_NEW_TOKEN = "PUSH_NEW_TOKEN",
  UPDATE_TOKEN_VALUE = "UPDATE_TOKEN_VALUE",
  CREATE_NEW_WALLET = "CREATE_NEW_WALLET",
}

type DogeSymbol = typeof Protocol_Symbol;

export interface DOGEDRC {
  method: ValidMethods;
  p: DogeSymbol;
  op: ValidMethods;
  tick: string;
  amt?: number;
  max?: number;
  lim?: number;
}

interface InscriptionMeta {
  hash: string;
  sender: string;
  receiver?: string;
  time: number;
  block: number;
  inscriptionId: string;
}

export interface Doginals {
  inscriptionData: InscriptionMeta;
  DRCData: DOGEDRC;
}

export interface DoginalsDeployment {
  tick: string;
  supply: bigint;
  limit: bigint;
  MintedAmount: bigint;
  deployer: string;
  txid: string;
  inscriptionID: string;
  time: number;
  block: number;
  isMinted: boolean;
  completedBlock?: number;
}

export interface DeployedCache {
  tick: string;
  supply: bigint;
  limit: bigint;
  MintedAmount: bigint;
  isMinted: boolean;
  MintedBlock: number;
}

export type BalanceData = {
  tick: string;
  amount: string;
  transferable: string;
  updateTypes?: BalanceUpdateTypes;
};

export interface BalanceDoginals {
  address: string;
  holding: BalanceData[];
}

export interface InscribedData {
  address: string;
  inscribed_id: string;
}

export interface DoginalsLogs {
  tick: string;
  amount?: bigint;
  limit?: bigint;
  max?: bigint;
  block: number;
  inscripition_id: string;
  txid: string;
  sender?: string;
  receiver: string;
  isValid: boolean;
  reasonIgnore?: string;
  event: "deploy" | "mint" | "inscribe-transfer" | "transfer";
}
