"use client"
import HomePage from '@/components/home'
import { config } from '@/lib/config'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'


const queryClient = new QueryClient()

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <HomePage />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}