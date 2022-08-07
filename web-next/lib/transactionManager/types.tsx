import { TransactionReceipt } from "@ethersproject/abstract-provider";

export type BaseTransaction = {
  hash: string;
  waitPromise: Promise<void>;
  completed: boolean;
};

export type PendingTransaction = {
  completed: false;
  settledAt: undefined;
} & BaseTransaction;

export type CompletedTransaction = {
  completed: true;
  settledAt: Date;
  transactionReceipt: TransactionReceipt;
} & BaseTransaction;

export type Transaction = PendingTransaction | CompletedTransaction;
