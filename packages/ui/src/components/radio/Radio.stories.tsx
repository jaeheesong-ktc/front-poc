import type { StoryObj } from '@storybook/react'
import { Radio } from './Radio'
import { RadioProps } from './Radio'
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
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    color: {
      description: 'radio의 색상을 설정합니다.',
      control: { type: 'select' },
    },
    size: {
      description: 'radio의 크기를 설정합니다.',
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<RadioProps>

export const Default: Story = {
  args: {
    value: 'Apple',
    label: 'apple',
  },
}

export const Color: Story = {
  render: () => {
    const colorGroup = colorOptions.map((color) => (
      <Radio value={color} label={color} color={color} />
    ))
    return <StoryTemplate items={colorGroup} />
  },
}

export const Size: Story = {
  render: () => {
    const sizeGroup = sizeOptions.map((size) => <Radio value={size} label={size} size={size} />)
    return <StoryTemplate items={sizeGroup} />
  },
}

export const Disabled: Story = {
  args: {
    label: 'disabled',
    disabled: true,
  },
}
