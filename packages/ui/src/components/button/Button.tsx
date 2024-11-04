import React, { ReactNode } from 'react'
import './button.scss'

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  disabled?: boolean
  href?: string
  label?: string
  loading?: boolean
  variant?: 'filled' | 'outlined' | 'standard'
  size?: 'small' | 'medium' | 'large'
  startIcon?: ReactNode
  endIcon?: ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = (
  {
    color = 'primary',
    disabled = false,
    href,
    label,
    loading = false,
    variant = 'filled',
    size = 'medium',
    onClick,
    startIcon,
    endIcon,
    ...props
  }: ButtonProps) => {
  const buttonContent = (
    <>
      {startIcon && (
        <span className={['storybook-icon-button-start'].join(' ')}>
          {startIcon}
        </span>
      )}
      <span>{label}</span>
      {endIcon && (
        <span className={['storybook-icon-button-end'].join(' ')}>
          {endIcon}
        </span>
      )}
    </>
  )

  return loading ? (
      <button
        type='button'
        className={[
          `storybook-button-${size}`,
          `storybook-button-spin-${variant}`
        ].join(' ')}
        disabled={true}
      >
        <span className={[`loader-${variant}`].join(' ')}></span>
      </button>
    ) : href && !disabled ? (
      <a href={href}>
        <button 
          className={[
            `storybook-button-${size}`,
            `button-${variant}-${color}`,
          ].join(' ')}>
            {buttonContent}
        </button>
      </a>
    ) : (
    <button
      type='button'
      disabled={!!disabled}
      className={[
        `storybook-button-${size}`,
        `button-${variant}-${color}`,
      ].join(' ')}
      onClick={(event) => {
        if (onClick) {
          onClick(event) // 클릭 이벤트 객체를 전달하여 호출
        }
      }}
      {...props}
    >
      {buttonContent}
    </button>
  )
}