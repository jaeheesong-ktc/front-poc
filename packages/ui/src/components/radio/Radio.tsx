import React, { useState } from 'react'
import './radio.scss'
import '@kt-cloud-front/ui/styles/ktcTheme.scss'

export interface RadioProps {
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  checked?: boolean
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
    checked,
    disabled = false,
    id,
    label,
    name,
    size = 'medium',
    value,
    onChange,
    ...props
  }: RadioProps) => {

  // 내부 상태로 checked 값을 관리
  const [internalChecked, setInternalChecked] = useState<boolean>(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked
    setInternalChecked(newChecked) // 내부 상태 업데이트
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div style={{
      padding: '7px 15px'
    }}>
    {/*<span className={[`storybook-radio-focus`].join(' ')}>*/}
      <label
        className={[`storybook-font-size-${size}`].join(' ')}
        // for={id}
      >
        <input
          type='radio'
          name={name || ''}
          disabled={!!disabled}
          id={id || ''}
          value={value || ''}
          onChange={handleChange}
          className={[`storybook-radio-color-${color}`, `storybook-radio-size-${size}`].join(' ')}
          checked={checked !== undefined ? checked : internalChecked} // 외부에서 받은 checked 값 또는 내부 상태 사용
        />
        {label}
      </label>
    {/*</span>*/}
    </div>
  )
}
       
