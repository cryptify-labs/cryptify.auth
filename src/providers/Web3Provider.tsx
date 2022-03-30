import React, { createContext, FC, useState } from 'react'
import { useWeb3React, Web3ReactProvider } from '@web3-react/core'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'

export interface IWeb3Context {
    active: boolean,
    account?: string | null,
    chainId?: number,
    connectWallet: (walletType: string) => Promise<void>,
    error?: Error
    library: any,
    setError: (error: Error) => void,
    isCryptifyModalOpen: boolean,
    setIsCryptifyModalOpen: React.Dispatch<React.SetStateAction<boolean>> 
}

export const injectedConnector = new InjectedConnector({
    supportedChainIds: [1, 2, 3, 4, 5, 137, 80001]
})

export const Web3Context = createContext<IWeb3Context | undefined>(undefined)

export const Web3ContextProvider: FC = ({ children }) => {
    
    const { active, activate, setError, account, library, chainId, error} = useWeb3React()
    const [ isCryptifyModalOpen, setIsCryptifyModalOpen ] = useState(false)

    const connectWallet = async (walletType: string) => {
        switch(walletType){
            case "metamask":
                try {
                    await activate(injectedConnector)
                    return 
                }
                catch(err){
                    return
                }

            default: setError(new 
                Error('Please choose from the above when connecting a wallet')
            )
        }
    }

    return(
            <Web3Context.Provider value={{
                // activate,
                active,
                // connector,
                connectWallet,
                library,
                setError,
                account,
                chainId,
                error,
                isCryptifyModalOpen,
                setIsCryptifyModalOpen
            }}>
                {children}
            </Web3Context.Provider>
    )
}

export const DappProvider: FC = ({ children }) => {
    
    const getLibrary =  (provider: JsonRpcFetchFunc | ExternalProvider) => {
        return new Web3Provider(provider)
    }

    return(
        <Web3ReactProvider getLibrary={getLibrary}>
            <Web3ContextProvider>
                {children}
            </Web3ContextProvider>
        </Web3ReactProvider>
    )
}