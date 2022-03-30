import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, Props } from '../src/Button'

const meta: Meta = {
    title: 'Connect Wallet',
    component: Button
}

export default meta

export const ConnectWallet = () => <Button wallet='Metamask'></Button>