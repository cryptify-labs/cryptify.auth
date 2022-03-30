import React from 'react'
import { useWeb3 } from '../../index'

interface IWalletconnect {
    wallet: string
}

export const Walletconnect = ({ wallet }: IWalletconnect) => {    
    const { connectWallet } = useWeb3()
    return(
        <div>
            <button onClick={() => connectWallet(wallet)}>
                Connect {wallet}
            </button>
        </div>
    )
}