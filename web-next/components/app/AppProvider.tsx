import { ReactNode } from "react";
import { WagmiConfig } from "wagmi";
import { client } from "~lib/wagmi";
import { TransactionManagerProvider } from "~lib/transactionManager";

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <WagmiConfig client={client}>
      <TransactionManagerProvider>{children}</TransactionManagerProvider>
    </WagmiConfig>
  );
}
