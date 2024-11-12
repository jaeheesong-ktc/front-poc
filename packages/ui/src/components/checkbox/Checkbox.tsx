import React, { useState, ReactNode } from 'react'
import './checkbox.scss'

export interface CheckboxProps {
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning'
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  id?: string
  indeterminate?: boolean
  label?: string
  size?: 'small' | 'medium' | 'large'
  value?: any
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon?: ReactNode
  checkedIcon?: ReactNode
}
export const Checkbox = (
  {
    color = 'primary',
    checked,
    defaultChecked = false,
    disabled = false,
    id,
    indeterminate= false,
    label,
    size = 'medium',
    onChange,
    ...props
  }: CheckboxProps) => {

  // 내부 상태로 checked 값을 관리
  const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked ?? false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked
    setInternalChecked(newChecked) // 내부 상태 업데이트
    if (onChange) {
      onChange(e)
    }
  }

  return (
    // <div style={{
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   gap: '5px',
    // }}>
      <label
        className={[`storybook-font-size-${size}`].join(' ')}
      >
        <input
          type="checkbox"
          className={[
            `storybook-check-color-${color}`,
            indeterminate ? `storybook-check-size-determinate-${size}` : `storybook-check-size-${size}`,
          ].join(' ')}
          checked={checked !== undefined ? checked : internalChecked} // 외부에서 받은 checked 값 또는 내부 상태 사용
          disabled={!!disabled}
          id={id}
          onChange={handleChange}
        />
        {label}
      </label>
    // </div>
  )
}
