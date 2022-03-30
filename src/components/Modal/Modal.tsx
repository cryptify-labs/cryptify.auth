import React, { FC } from 'react'
import { Walletconnect } from '../index'

interface IWeb3Modal {
    wallets?: Array<string>
}

export const Modal: FC<IWeb3Modal> = 
    ({ wallets = ['metamask', 'walletconnect', 'coinbase']}) =>
{
    return (
        <div>
            {
                wallets.map((wallet) => {
                    return(
                        <Walletconnect wallet={wallet} key={wallet}/>
                    )
                })
            }
            <p>Powered by Cryptify</p>
        </div>
    )
}