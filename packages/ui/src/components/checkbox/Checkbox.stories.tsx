import React from 'react';
import type { StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { CheckboxProps } from './Checkbox'
import StoryTemplate from '@kt-cloud-front/ui/common/StoryTemplate'

const colorOptions = ['primary', 'secondary', 'error', 'warning'] as const
const sizeOptions = ['small', 'medium', 'large'] as const

interface IMeta {
  title: string
  component: object
  parameters: object
  tags: string[]
  args?: object
  argTypes: object
  render?: any
}

const meta: IMeta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  args: {

  },
  argTypes: {
    color: {
      description: 'checkbox의 색상을 설정합니다.',
      control: { type: 'select' },
    },
    size: {
      description: 'checkbox의 크기를 설정합니다.',
      control: { type: 'select' },
    },
  }
}

export default meta

type Story = StoryObj<CheckboxProps>

export const Default: Story = {
  args: {
    value: 'Apple',
    label: 'apple',
    // checked: true,
    // defaultChecked: true,
    // indeterminate: true,
  },
}
export const defaluteChecked: Story = {
  args: {
    value: 'Apple',
    label: 'apple',
    defaultChecked: true,
  },
}

export const Size: Story = {
  render: () => {
    // eslint-disable-next-line react/jsx-key
    const sizeGroup = sizeOptions.map((size) => <Checkbox id={size} label={size} size={size} />)
    return <StoryTemplate items={sizeGroup} />
  }
}

export const Color: Story = {
  render: () => {
    // eslint-disable-next-line react/jsx-key
    const colorGroup = colorOptions.map((color) => <Checkbox id={color} label={color} color={color} />)
    return <StoryTemplate items={colorGroup} />
  }
}

export const Disabled: Story = {
  render: () => {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '40px',
        margin: '40px',
        alignItems: 'center',
      }}>
        <Checkbox id={'checked-disabled'} checked disabled label={'disabled'} />
        <Checkbox id={'disabled'} disabled label={'disabled'} />
      </div>
    )
  },
}