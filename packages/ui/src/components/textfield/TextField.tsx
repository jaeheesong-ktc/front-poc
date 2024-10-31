import React, { useState, useEffect, useRef } from 'react'
import { Icons } from '@storybook/components' // Import Storybook's Icons component
import './textfield.scss'

type ColorOptions = 'primary' | 'secondary' | 'error' | 'success' | 'warning'
type SizeOptions = 'small' | 'medium' | 'large'
type VariantOptions = 'filled' | 'outlined' | 'standard'
type TypeOptions = 'text' | 'date' | 'datetime-local' | 'file' | 'password'

interface TextFieldProps {
  color?: ColorOptions
  value?: string
  variant?: VariantOptions
  error?: boolean
  helperText?: string
  id?: string | any
  label?: string
  placeholder?: string | any
  required?: boolean | any
  size?: SizeOptions
  disabled?: boolean | any
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  multiline?: boolean
  rows?: number
  type?: TypeOptions
}

export const TextField = ({
  color = 'primary',
  value = '',
  variant = 'outlined',
  id,
  label,
  placeholder,
  required = false,
  size = 'medium',
  onChange,
  error = false,
  disabled,
  helperText,
  multiline = false,
  rows = 1,
  type = 'text',
  ...props
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [internalValue, setInternalValue] = useState(value || '')
  const [showPassword, setShowPassword] = useState(false) // State to toggle password visibility
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const showPlaceholder = !internalValue && placeholder

  useEffect(() => {
    setInternalValue(value || '')
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInternalValue(e.target.value)
    if (onChange) {
      onChange(e)
    }
  }

  const getClassNames = (...classes: Array<string | false | null | undefined>) =>
    classes.filter(Boolean).join(' ')

  useEffect(() => {
    if (multiline && !rows && textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [internalValue, multiline, rows])

  return (
    <div className="ktc-textfield-root">
      <div
        className={getClassNames(
          `ktc-textfield-${size}`,
          `ktc-textfield-${variant}`,
          error && 'ktc-textfield-error',
        )}
      >
        <div
          className={getClassNames(
            'ktc-textfield-wrapper',
            (isFocused || internalValue || showPlaceholder) && 'ktc-textfield-wrapper--focused',
          )}
        >
          {label && (
            <label
              id={id}
              className={getClassNames(
                `ktc-textfield-label`,
                (isFocused || internalValue || showPlaceholder) &&
                  `ktc-textfield-label-active ktc-textfield-label--${error ? 'error' : color}`,
              )}
            >
              {label}
            </label>
          )}
          <div className="ktc-textfield-input-container">
            {multiline ? (
              <textarea
                ref={textareaRef}
                id={id}
                value={internalValue}
                className={getClassNames(`ktc-textfield-input`, `ktc-textfield-input--${color}`)}
                placeholder={showPlaceholder ? placeholder : ''}
                required={required}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={disabled}
                onChange={handleChange}
                rows={rows || 1}
                {...props}
              />
            ) : (
              <>
                <input
                  type={type === 'password' && showPassword ? 'text' : type}
                  id={id}
                  value={internalValue}
                  className={getClassNames(`ktc-textfield-input`, `ktc-textfield-input--${color}`)}
                  placeholder={showPlaceholder ? placeholder : ''}
                  required={required}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  disabled={disabled}
                  onChange={handleChange}
                  {...props}
                />
                {type === 'password' && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="ktc-textfield-show-password"
                  >
                    {showPassword ? <Icons icon="eyeclose" /> : <Icons icon="eye" />}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
        {error ? (
          <span className="ktc-textfield-error">{helperText}</span>
        ) : (
          <span className="ktc-textfield-helperText">{helperText}</span>
        )}
      </div>
    </div>
  )
}
