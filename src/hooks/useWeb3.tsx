import { useContext } from 'react'
import { Web3Context } from '../providers/Web3Provider'

export const useWeb3 = () => {
    const context = useContext(Web3Context)
    if(context === undefined){
        throw new Error("useWeb3 must be within a context provider")
    }
    return context
}