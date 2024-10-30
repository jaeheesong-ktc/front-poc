import { ChangeEvent, MouseEventHandler, ReactNode, useCallback, useRef, useState } from 'react'
import './select.scss'
import { ChevronSmallDownIcon } from '@storybook/icons'

export interface IMenuList {
  [key: string]: any
}

export interface SelectProps {
  value: any
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  menuList: IMenuList[]
  menuKey?: string
  menuLabel?: string
  variant?: 'outlined' | 'standard'
  size?: 'small' | 'medium'
  error?: boolean
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  multiple?: boolean
  placeholder?: string
  helperText?: string
  id?: string
  label?: ReactNode
  labelAlign?: 'vertical' | 'horizontal'
}

export const Select = ({
  value,
  menuList,
  menuKey,
  menuLabel,
  variant = 'outlined',
  size = 'small',
  labelAlign = 'vertical',
  error = false,
  required = false,
  disabled = false,
  readOnly = false,
  multiple = false,
  placeholder,
  helperText,
  onChange,
  id,
  label,
  ...props
}: SelectProps) => {
  const controlRef = useRef<HTMLDivElement>(null)

  const focusToControl = useCallback(() => {
    controlRef.current?.focus()
  }, [])

  const [isOpened, setIsOpened] = useState(false)
  const [selectedValue, setSelectedValue] = useState<any>(value)

  const handleClick = useCallback(() => {
    setIsOpened(!isOpened)
    focusToControl()
  }, [isOpened])

  const handleBlur = useCallback(() => {
    setIsOpened(false)
  }, [])

  const handleSelectItem = useCallback(
    (item: any) => () => {
      setSelectedValue(item)
      setIsOpened(false)
      onChange(item)
    },
    [selectedValue],
  )
  const handleMouseDownItem = (e: MouseEventHandler<HTMLDivElement> | any) => {
    e.preventDefault() // blur 방지
  }

  const transferMenuItem = (item: object | string, key: any) => {
    return typeof item === 'object' ? item[key] : item
  }
  return (
    <div className={`ktc-select-wrapper-${labelAlign}`}>
      <div className="ktc-select-label">
        {label}
        {required && <span className={'ktc-select-label-required'}>*</span>}
      </div>
      <div className={'ktc-select-control'}>
        <div
          ref={controlRef}
          onBlur={handleBlur}
          tabIndex={disabled ? -1 : 0}
          className={`ktc-select-controlBox ktc-select-controlBox-${variant} ktc-select-controlBox-${size}`}
          onClick={handleClick}
        >
          {selectedValue === '' || selectedValue.length === 0 ? (
            <div className="ktc-select-placeholder">{placeholder}</div>
          ) : (
            <div>{transferMenuItem(selectedValue, menuLabel)}</div>
          )}
          <ChevronSmallDownIcon
            className={`${isOpened ? 'ktc-select-controlBox-chevronIcon-open' : ''}`}
          />
        </div>
        <div className={`ktc-select-menuList ${isOpened ? 'ktc-select-menuList-open' : ''}`}>
          {menuList.length === 0 ? (
            <div className={`ktc-select-menuItem-${size}`}>데이터가 존재하지 않습니다.</div>
          ) : (
            menuList.map((item: any) => (
              <div
                key={transferMenuItem(item, menuKey)}
                className={`ktc-select-menuItem-${size} ${transferMenuItem(item, menuKey) === transferMenuItem(selectedValue, menuKey) ? 'ktc-select-menuItem-selected' : ''}`}
                onClick={handleSelectItem(item)}
                onMouseDown={handleMouseDownItem}
              >
                {transferMenuItem(item, menuLabel)}
              </div>
            ))
          )}
        </div>
      </div>
      {helperText && <div className={'ktc-select-helperText'}>{helperText}</div>}
    </div>
  )
}
