import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

import "@rainbow-me/rainbowkit/styles.css"
import {
    getDefaultWallets,
    RainbowKitProvider,
    lightTheme,
} from "@rainbow-me/rainbowkit"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import {
    goerli,
    polygonMumbai,
    bscTestnet,
    optimismGoerli,
    sepolia,
} from "wagmi/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

const { chains, publicClient } = configureChains(
    [goerli, polygonMumbai, bscTestnet, optimismGoerli, sepolia],
    [
        alchemyProvider({ apiKey: "KO-A-NeITdzNIMwhE4snnj3epbaeqCCp" }),
        publicProvider(),
    ],
)

const { connectors } = getDefaultWallets({
    appName: "TokenSwap",
    projectId: "201675b279d66737f3978db03768e72f",
    chains,
})

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <WagmiConfig config={wagmiConfig}>
                <RainbowKitProvider
                    chains={chains}
                    theme={lightTheme({
                        accentColor: "#7b3fe4",
                        accentColorForeground: "white",
                        overlayBlur: "small",
                    })}
                >
                    <App />
                </RainbowKitProvider>
            </WagmiConfig>
        </BrowserRouter>
    </React.StrictMode>,
)
