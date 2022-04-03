## Cryptify - Wallet Integrations done easy

Now you can easily support multiple wallets such as Metamask, Rainbow, Trust, Argent & Coinbase in your Web3 App with a few lines of code.

No messy configurations & integrations, simple react code.

1. Install the sdk via npm or yarn
``` 
npm install @cryptify/auth
```
	yarn add @cryptify/auth 
2. In your top level file -> App.js or index.js, wrap your main component with the following provider - DappProvider.

```
// In App.js or index.js

import { DappProvider } from '@cryptify/auth'

const App = () => {
	return(
		<DappProvider>
			<Main />
		</DappProvider>
	)
}

```
3. In your component file where you want to integrate the wallets
```
import { ConnectButton as Web3Button, useWeb3 } from '@cryptify/auth' 

const YourComponent = () => {
	const wallets = ['metamask', 'coinbase', 'walletconnect']
	const { active, account } = useWeb3()
	return(
		<div>
			{/*  Your other components go here */}
			<Web3Button wallets={wallets}/>
		</div>
	)
}

export default YourComponent


### Example Code
```
// import { useWeb3, DappProvider, ConnectButton } from '@cryptify/auth'

const Test = () => {

  const { active, connectWallet, account, error } = useWeb3()
  
  useEffect(() => {
    console.log(error)
  })

  return(
    <div>
      <ConnectButton>
        Connect Wallet
      </ConnectButton>
    </div>
  )
}

const App = () => {
  return (
    <DappProvider>
      <Test />
    </DappProvider>
  );
};