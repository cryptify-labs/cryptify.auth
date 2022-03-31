import React from 'react'
import { useWeb3 } from '../../index'
import '../../styles/tailwind.css'

// import metamask from '../../assets/metamask_img.png'touch

interface IWalletconnect {
    wallet: string
}

export const Walletconnect = ({ wallet }: IWalletconnect) => {    
    const { connectWallet } = useWeb3()
    return(
        <div className='bg-gray-200'>
            <button onClick={() => connectWallet(wallet)} className="px-4 py-2">
                Connect {wallet}
            </button>
        </div>
    )
}