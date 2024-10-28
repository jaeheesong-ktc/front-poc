import React from 'react'
import './radio.css'
import '../../styles/ktcTheme.scss'

export interface RadioProps {
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  disabled?: boolean
  name?: string
  size?: 'small' | 'medium' | 'large'
  value?: string
  onChange?: () => void
}

export const Radio = (
  {
    color = 'primary',
    disabled = false,
    name,
    size = 'medium',
    value,
    onChange,
    ...props
  }: RadioProps) => {
  return (
    // <>
      <input
        type='radio'
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        className={[`storybook-radio-primary`].join(' ')}
      />
    // </>
  )
}

 /*<label style={{ fontSize: `var(--ktc-font-size-${size})` }}>{label}</label>*/
       
