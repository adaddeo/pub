import { createClient, configureChains, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const chains = process.env.TESTNET ? [chain.polygonMumbai] : [chain.polygon];

const { provider, webSocketProvider } = configureChains(chains, [
  publicProvider(),
]);

export const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});
