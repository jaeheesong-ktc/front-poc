import React from 'react'
import './checkbox.scss'

export interface CheckboxProps {
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning'
  defaultChecked?: boolean
  disabled?: boolean
  label?: string
  size?: 'small' | 'medium' | 'large'
  value?: any
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Checkbox = (
  {
    color = 'primary',
    defaultChecked,
    disabled,
    label,
    size = 'medium',
    onChange,
    ...props
  }: CheckboxProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div style={{display: "inline-flex", alignItems: 'center', justifyContent: 'center'}}>
      {/*<span className={[`storybook-check-focus`].join(' ')}>*/}
        <input
          type="checkbox"
          className={[
            `storybook-check-color-${color}`,
            // `storybook-check-size-${size}`
          ].join(' ')}
          disabled={!!disabled}
          defaultChecked={!!defaultChecked}
          onChange={handleChange}
        />
      {/*  <label*/}
      {/*    className={[`storybook-font-size-${size}`].join(' ')}*/}
      {/*  >*/}
      {/*    {label}*/}
      {/*  </label>*/}
      {/*</span>*/}
    </div>
  )
}
