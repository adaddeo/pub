import { ReactNode } from "react";
import { useAccount } from "wagmi";

type ClientOnlyProps = {
  children: ReactNode;
};

export function ClientOnly({ children }: ClientOnlyProps) {
  const [isRendered];

  if (isConnected && address === "0xb13c60ee3eCEC5f689469260322093870aA1e842") {
    return <>{children}</>;
  }

  return null;
}
