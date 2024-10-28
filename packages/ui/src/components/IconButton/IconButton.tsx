import React, { ReactNode, useState } from 'react'
import './icon-button.scss'

export interface IconButtonProps {
  icon: ReactNode
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  disabled?: boolean
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const IconButton = (
  {
    color = 'primary',
    disabled = false,
    href,
    onClick,
    ...props
  }: IconButtonProps) => {
  return href && !disabled ? (
    <a href={href}>
      <button
        type='button'
        className={[`storybook-icon-button-${color}`].join(' ')}
        disabled={!!disabled}
        onClick={(event) => {
          if (onClick) {
            onClick(event) // 클릭 이벤트 객체를 전달하여 호출
          }
        }}
      >
        {props.icon}
      </button>
    </a>
  )  : (
    <button
      type='button'
      className={[`storybook-icon-button-${color}`].join(' ')}
      disabled={!!disabled}
      onClick={(event) => {
        if (onClick) {
          onClick(event) // 클릭 이벤트 객체를 전달하여 호출
        }
      }}
    >
      {props.icon}
    </button>
  )
}