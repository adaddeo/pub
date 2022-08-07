import { createContext, useContext } from "react";
import { PendingTransaction } from "./types";

type TransactionManagerContextValue = {
  add(hash: string): PendingTransaction;
  pendingTransactions: PendingTransaction[];
};

export const TransactionManagerContext =
  createContext<TransactionManagerContextValue>(
    {} as TransactionManagerContextValue
  );

export const useTransactionManager = () =>
  useContext(TransactionManagerContext);
