import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'

// metamask connector
const injected = new InjectedConnector({
    supportedChainIds: [1, 137, 80001]
})

// rainbow, trust, argent, metamask mobile
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

const coinbase = new WalletLinkConnector({
    url: 'https://mainnet.infura.io/v3/dfab8aad88134254842d1004448c0808',
    appName: 'Cryptify Auth',
})

export { injected, walletconnect, coinbase }