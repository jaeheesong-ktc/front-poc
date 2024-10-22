import React, { ReactNode, useState } from 'react'
import { Button } from '../button/Button'
import './icon-button.scss'

export interface IconButtonProps {
  icon: ReactNode
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  disabled?: boolean
//   href?: string
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

export const IconButton = ({ 
                        color = 'primary',
                        disabled = false,
                        // href,
                        size = 'medium',
                        onClick,
                        ...props
                       }: IconButtonProps) => {
                         
  return(
    <button  
      type='button'
      className={[`storybook-icon-button-${color}`, `storybook-icon-button-${size}`].join(' ')} 
      disabled={disabled}
    >
        {props.icon}
    </button>
  )  
}