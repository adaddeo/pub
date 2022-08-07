import { TransactionReceipt } from "@ethersproject/abstract-provider";
import { ReactNode, useState } from "react";
import { useProvider } from "wagmi";
import { TransactionManagerContext } from "./context";

type BaseTransaction = {
  hash: string;
  waitPromise: Promise<void>;
  completed: boolean;
};

type PendingTransaction = {
  completed: false;
  settledAt: undefined;
} & BaseTransaction;

type CompletedTransaction = {
  completed: true;
  settledAt: Date;
  transactionReceipt: TransactionReceipt;
} & BaseTransaction;

type Transaction = PendingTransaction | CompletedTransaction;

type TransactionManagerProviderProps = {
  children: ReactNode;
};

export function TransactionManagerProvider({
  children,
}: TransactionManagerProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      hash: "0x000000",
      completed: false,
      waitPromise: new Promise(() => {}),
    } as PendingTransaction,
  ]);

  const provider = useProvider();

  function add(hash: string) {
    const waitPromise = provider.waitForTransaction(hash).then((receipt) => {
      const updatedTransactions = transactions.map((transaction) => {
        if (transaction.hash === hash) {
          return {
            ...transaction,
            completed: true,
            settledAt: new Date(),
          } as CompletedTransaction;
        }

        return transaction;
      });

      setTransactions(updatedTransactions);
    });

    const transaction = {
      hash,
      completed: false,
      waitPromise,
    } as PendingTransaction;

    setTransactions([...transactions, transaction]);
    return transaction;
  }

  const pendingTransactions = transactions.filter(
    (t) => !t.completed
  ) as PendingTransaction[];

  const contextValue = { add, transactions, pendingTransactions };

  return (
    <TransactionManagerContext.Provider value={contextValue}>
      {children}
    </TransactionManagerContext.Provider>
  );
}
