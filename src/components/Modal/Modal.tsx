import React, { FC } from 'react'
import { Walletconnect } from '../index'

interface IWeb3Modal {
    wallets?: Array<string>
}

export const Modal: FC<IWeb3Modal> = 
    ({ wallets = ['metamask', 'walletconnect', 'coinbase']}) =>
{
    return (
        <div className='bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center'>
            <div className='bg-gray-100 px-8 py-8 space-y-8'>
                {
                    wallets.map((wallet) => {
                        return(
                            <Walletconnect wallet={wallet} key={wallet}/>
                        )
                    })
                }
                <p className='text-center text-xs'>Powered by Cryptify</p>
            </div>
        </div>
    )
}