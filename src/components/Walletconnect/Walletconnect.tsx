import React, { useEffect } from 'react'
import { useWeb3 } from '../../index'
import '../../styles/tailwind.css'
// @ts-ignore
import metamask from '../../assets/metamask_img.png'
// @ts-ignore
import coinbase from '../../assets/coinbase_img.png'
// @ts-ignore
import walletconnect from '../../assets/walletconnect_img.png'

interface IWalletconnect {
    wallet: string
}

export const Walletconnect = ({ wallet }: IWalletconnect) => {    
    const { connectWallet } = useWeb3()

    let src
    switch(wallet){
        case 'metamask':
            src = metamask
            break
        case 'walletconnect':
            src = walletconnect
            break
        case 'coinbase':
            src = coinbase
            break
        default: break            
    }

    useEffect(() => console.log(wallet))
    return(
        <div className='bg-gray-200'>
            <button onClick={() => connectWallet(wallet)} className="px-4 py-2 flex items-center">
                <img src={src} alt="" className='h-8 '/>
                <p>Connect {wallet}</p>
            </button>
        </div>
    )
}