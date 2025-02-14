import { Protocol_Symbol } from "./config";
import Decimal from "decimal.js";
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
  index: number;
  inscriptionId: string;
}

export interface Doginals {
  inscriptionData: InscriptionMeta;
  DRCData: DOGEDRC;
}

export interface DoginalsDeployment {
  tick: string;
  supply: string;
  limit: string;
  MintedAmount: string;
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
  supply: Decimal;
  limit: Decimal;
  MintedAmount: Decimal;
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
  hash: string;
  index: number;
}

export interface DoginalsLogs {
  tick: string;
  amount?: string;
  limit?: string;
  max?: string;
  block: number;
  inscripition_id: string;
  txid: string;
  sender?: string;
  receiver: string;
  isValid: boolean;
  reasonIgnore?: string;
  event: "deploy" | "mint" | "inscribe-transfer" | "transfer";
}

export interface DoginalsInputTransaction {
  block: number;
  txId: string;
  InscriptionPresentIndex: number;
  Inputs: { hash: string; index: string }[];
  outputs: {
    transactionHash: string;
    index: string;
    address: string;
    value: number;
  }[];
  InscriptionUTXOs: {
    hash: string;
    index: number;
    address: string;
    inscribed_id: string;
  };
  index: number;
  time: number;
}
export type Outputdata = {
  hash: string;
  value: number;
};
export interface outputDecode {
  outputs: Outputdata[];
}
