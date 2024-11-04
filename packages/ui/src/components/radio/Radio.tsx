import React,  { HTMLAttributes } from 'react'
import './radio.scss'
import '@kt-cloud-front/ui/styles/ktcTheme.scss'

export interface RadioProps {
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  disabled?: boolean
  id?: string
  name?: any
  label?: string
  size?: 'small' | 'medium' | 'large'
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio = (
  {
    color = 'primary',
    disabled = false,
    id,
    label,
    name,
    size = 'medium',
    value,
    onChange,
    ...props
  }: RadioProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div style={{display: "inline-flex", alignItems: 'center', justifyContent: 'center'}}>
      <span className={[`storybook-radio-focus`].join(' ')}>
        <input
          type='radio'
          name={name || ''}
          disabled={!!disabled}
          id={id || ''}
          value={value || ''}
          onChange={handleChange}
          className={[`storybook-radio-color-${color}`, `storybook-radio-size-${size}`].join(' ')}
        />
      </span>
      <label
        className={[`storybook-font-size-${size}`].join(' ')}
        // for={id}
      >
        {label}
      </label>
    </div>
  )
}
       
