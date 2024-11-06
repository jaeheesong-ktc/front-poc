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
  args: {},
  argTypes: {},
}

export default meta

type Story = StoryObj<CheckboxProps>

export const Default: Story = {
  args: {
    value: 'Apple',
    label: 'apple',
  },
}

export const Size: Story = {
  render: () => {
    const sizeGroup = sizeOptions.map((size) => <Checkbox label={size} size={size} />)
    return <StoryTemplate items={sizeGroup} />
  },
}

export const Color: Story = {
  render: () => {
    const colorGroup = colorOptions.map((color) => <Checkbox label={color} color={color} />)
    return <StoryTemplate items={colorGroup} />
  },
}

export const Disabled: Story = {
  args: {
    label: 'disabled',
    disabled: true,
  },
}
