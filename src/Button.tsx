import React, { HTMLAttributes } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    wallet: string
}

export const Button = ({wallet, ...props}: Props) => {
  return (
    <button {...props} onClick={() => console.log('Clicked')}>Connect to {wallet}</button>
  )
}
