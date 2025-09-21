"use client"
import { createConfig, http } from 'wagmi'
import {arbitrumSepolia} from 'wagmi/chains'
import type { Config } from "wagmi";
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  rainbowWallet,
  walletConnectWallet,metaMaskWallet
} from '@rainbow-me/rainbowkit/wallets';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [rainbowWallet, walletConnectWallet,metaMaskWallet],
    },
  ],
  {
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
  }
);

export const config: Config = createConfig({connectors,
    chains: [arbitrumSepolia],
    transports: {
      [arbitrumSepolia.id]: http(),
    }
  });