import React from 'react'
import { useWeb3 } from '../../index'
import '../../styles/tailwind.css'


interface IWalletconnect {
    wallet: string
}

export const Walletconnect = ({ wallet }: IWalletconnect) => {    
    
    const { connectWallet } = useWeb3()
    const metamask = 'https://ik.imagekit.io/7jwuvl98ti9/assets/metamask_img_Fc-xRB2APg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648712582430'
    const coinbase = 'https://ik.imagekit.io/7jwuvl98ti9/assets/walletconnect_img_HPJo-QByV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648712582394'
    const walletconnect = 'https://ik.imagekit.io/7jwuvl98ti9/assets/coinbase_img_Zdpk_5QWK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648712582162'

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

    // useEffect(() => console.log(wallet))
    return(
        <div className='bg-gray-200'>
            <button onClick={() => connectWallet(wallet)} className="px-4 py-2 flex items-center space-x-4">
                <img src={src} alt="" className='h-8 '/>
                <p>Connect {wallet}</p>
            </button>
        </div>
    )
}