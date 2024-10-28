import type { StoryObj } from '@storybook/react'
import { RadioProps } from 'Radio'
import { Radio } from './Radio'
import StoryContainer from '@kt-cloud-front/ui/common/StoryContainer'

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
  }
}

export default meta

type Story = StoryObj<RadioProps>

export const Default: Story = {
  args: {

  },
}

export const Color: Story = {
  args: { 
    color: 'secondary',
  },
}

