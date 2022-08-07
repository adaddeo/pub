import { ReactNode } from "react";
import { useAccount, useContractRead } from "wagmi";
import { useHasMounted } from "./useHasMounted";

// import { Publication__factory } from "~lib/typechain/factories/Publication__factory";
// import { Publication } from "~lib/typechain/Publication";

// const { data, isError, isLoading } = useContractRead({
//   addressOrName: "0x86B9246a772d12DC72eE1E0371991a6BF5eA86f9",
//   contractInterface: Publication__factory.createInterface(),
//   functionName: "owner",
// });

type AdminOnlyProps = {
  children: ReactNode;
};

const OWNER_ADDRESS = "0xb13c60ee3eCEC5f689469260322093870aA1e842";

export function AdminOnly({ children }: AdminOnlyProps) {
  const hasMounted = useHasMounted();
  const { address, isConnected } = useAccount();

  if (!hasMounted) {
    return null;
  }

  if (isConnected && address === OWNER_ADDRESS) {
    return <>{children}</>;
  }

  return null;
}
