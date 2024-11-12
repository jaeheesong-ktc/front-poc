import React from 'react';
import type { StoryObj } from '@storybook/react'
import { Switch } from './Switch'
import { SwitchProps } from "./Switch"
import StoryTemplate from '@kt-cloud-front/ui/common/StoryTemplate'

const colorOptions = ['primary', 'secondary', 'error', 'warning'] as const
const sizeOptions = ['small', 'medium', 'large'] as const

interface IMeta {
  title: string;
  component: object
  parameters: object
  tags: string[]
  args?: object
  argTypes: object
  render?: any
}

const meta: IMeta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    color: {
      description: 'switch의 색상을 설정합니다.',
      control: { type: 'select' },
    },
    size: {
      description: 'switch의 크기를 설정합니다.',
      control: { type: 'select' },
    },
  }
}

export default meta

type Story = StoryObj<SwitchProps>

export const Default: Story = {
  args: {

  },
}