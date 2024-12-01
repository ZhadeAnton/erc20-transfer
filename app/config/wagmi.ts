import { http, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { coinbaseWallet, injected } from 'wagmi/connectors';

const connectors =
  typeof window !== 'undefined'
    ? [injected(), coinbaseWallet({ appName: 'Create Wagmi' })]
    : [];

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors,
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
