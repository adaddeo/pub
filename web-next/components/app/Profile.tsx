import { useAccount, useConnect, useContractRead, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { displayHash } from "~lib/display";
import { useHasMounted } from "./useHasMounted";

export function Profile() {
  const hasMounted = useHasMounted();
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (!hasMounted) {
    return null;
  }

  if (isConnected && address) {
    const displayAddress = displayHash(address);

    return (
      <div>
        <div>connected to {displayAddress}</div>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  }

  return <button onClick={() => connect()}>Connect Wallet</button>;
}
