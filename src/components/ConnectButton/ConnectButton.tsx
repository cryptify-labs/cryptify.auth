import React, { HTMLAttributes, ReactNode } from 'react'
import { useWeb3 } from '../../hooks'
import { Modal } from '../Modal'

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    wallets?: Array<string>
}

export const ConnectButton = ({ children, wallets }: IButton) => {
    const { setIsCryptifyModalOpen, isCryptifyModalOpen } = useWeb3()
    return(
        <div>
            <button 
                onClick={() => setIsCryptifyModalOpen(true)} 
                className='bg-gray-200 px-4 py-2'
            >
                {children}
            </button>
            {
                isCryptifyModalOpen && 
                <Modal wallets={wallets}/>
            }
        </div>
    )
}