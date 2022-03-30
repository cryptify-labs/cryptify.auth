import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

// metamask connector
const injected = new InjectedConnector({
    supportedChainIds: [1, 137, 80001]
})

const walletconnect = new WalletConnectConnector({
    rpc: {
        1: "https://cloudflare-eth.com/",
        137: "https://polygon-rpc.com/",
        80001: "https://rpc-mumbai.matic.today"
    },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: 12000
})

export { injected, walletconnect }