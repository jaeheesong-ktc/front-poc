import {ReactNode} from 'react';
import type { StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'
import { IconButtonProps } from './IconButton'
// import { fn } from '@storybook/test'
import { TrashIcon } from '@storybook/icons'
import '../../styles/ktcTheme.scss'

interface IMeta {
  title: string;
  component: {}
  parameters: {}
  tags: string[]
  args?: {} 
  // args?: () => ArgsStoryFn // 체크 필요
  // argTypes: {}
  render?: any
}

const meta: IMeta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  // args: { onClick: fn() },
}
export default meta

type Story = StoryObj<IconButtonProps>;

const Container = ({children}: { children: ReactNode }) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>{children}</div>
        </div>
    )
  }

const Template = (args: IconButtonProps) => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
      <Container>
        <IconButton {...args} icon={<TrashIcon size={16}/>} />
        <IconButton {...args} icon={<TrashIcon size={16}/>} disabled='true' />
      </Container>
    </div>
  )

export const variant: Story = {
    render: Template,
    // args: { 
    //   label: 'Button',
    // },
  };