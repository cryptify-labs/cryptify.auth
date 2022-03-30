import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useWeb3, DappProvider, ConnectButton } from '../src/index'
import { useEffect } from 'react';

const Test = () => {

  const { active, connectWallet, account, error } = useWeb3()
  
  useEffect(() => {
    console.log(connectWallet)
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

ReactDOM.render(<App />, document.getElementById('root'));
