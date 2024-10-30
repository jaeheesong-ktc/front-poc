import type { StoryObj } from '@storybook/react'
import { Select, SelectProps } from './Select'
import { ChangeEvent, ReactNode, useState } from 'react'

interface IMeta {
  title: string
  component: object
  parameters?: any
  tags: string[]
  args?: object
  argTypes: object
  render?: any
}

const meta: IMeta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    label: {
      description: 'Select의 라벨을 설정합니다.',
    },
    labelAlign: {
      description: 'Select의 라벨 위치를 설정합니다.',
    },
    value: {
      description: '선택된 값을 정의합니다.',
    },
    menuList: {
      description: '선택 가능한 메뉴 목록을 설정합니다.',
    },
    variant: {
      description: 'Select 유형을 설정합니다.',
    },
    size: {
      description: 'Select Label을 설정합니다.',
      control: 'text',
    },
    error: {
      description: 'Select의 Error 여부를 설정합니다..',
      control: 'boolean',
    },
    required: {
      description: '필수 선택 여부를 설정합니다.',
      control: 'boolean',
    },
    disabled: {
      description:
        'Text Field 의 Error 여부를 설정합니다. 사용자 Feedback 을 위한 helperText 가 사용될 수 있습니다.',
      control: 'boolean',
    },
    readOnly: {
      description: 'Select의 읽기 전용 여부를 설정합니다.',
      control: 'text',
    },
    multiple: {
      description: 'Select의 다중 선택 여부를 설정합니다..',
      control: 'boolean',
    },
    placeholder: {
      description: 'Select의 placeholder를 설정합니다.',
      action: 'string',
    },
    helperText: {
      description: 'Select의 HelperText를 설정합니다.',
      action: 'string',
    },
  },
}

export default meta

type Story = StoryObj<SelectProps>

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingBlock: '50px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '100px' }}>{children}</div>
    </div>
  )
}

const DefaultTemplate = (args: SelectProps) => {
  const [select1, setSelect1] = useState<any>('')
  const handleSelect1Change = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelect1(e)
  }
  return (
    <div>
      <Select {...args} value={select1} onChange={handleSelect1Change} />
      <div style={{ fontSize: '13px', color: '#1975d2', marginTop: '20px' }}>
        선택된 값: {JSON.stringify(select1)}
      </div>
    </div>
  )
}

const AlignTemplate = (args: SelectProps) => {
  return (
    <Container>
      <Select {...args} labelAlign="vertical" />
      <Select {...args} labelAlign="horizontal" />
    </Container>
  )
}

const VariantTemplate = (args: SelectProps) => (
  <Container>
    <Select {...args} variant="outlined" />
    <Select {...args} variant="standard" />
  </Container>
)

const SizeTemplate = (args: SelectProps) => (
  <Container>
    <Select {...args} size="small" />
    <Select {...args} size="medium" />
  </Container>
)

export const Default: Story = {
  render: DefaultTemplate,
  args: {
    label: 'Label Name',
    placeholder: '선택해주세요',
    variant: 'outlined',
    size: 'small',
    required: true,
    menuList: [
      { label: '사과', value: 'apple' },
      { label: '망고', value: 'mango' },
      { label: '수박', value: 'watermelon' },
    ],
    menuKey: 'value',
    menuLabel: 'label',
    helperText: 'This is HelperText.',
    labelAlign: 'vertical',
  },
}

export const LabelAlign: Story = {
  render: AlignTemplate,
  args: {
    label: 'Label',
    placeholder: '선택해주세요',
    required: true,
    value: '',
    menuList: [
      { label: '사과', value: 'apple' },
      { label: '망고', value: 'mango' },
      { label: '수박', value: 'watermelon' },
    ],
    menuKey: 'value',
    menuLabel: 'label',
    helperText: 'This is HelperText',
  },
}

export const Variant: Story = {
  render: VariantTemplate,
  args: {
    label: 'Label',
    placeholder: '선택해주세요',
    size: 'small',
    required: true,
    value: '',
    menuList: [
      { label: '사과', value: 'apple' },
      { label: '망고', value: 'mango' },
      { label: '수박', value: 'watermelon' },
    ],
    menuKey: 'value',
    menuLabel: 'label',
    helperText: 'This is HelperText',
  },
}

export const Size: Story = {
  render: SizeTemplate,
  args: {
    label: 'Label',
    placeholder: '선택해주세요',
    variant: 'outlined',
    required: true,
    value: '',
    menuList: [
      { label: '사과', value: 'apple' },
      { label: '망고', value: 'mango' },
      { label: '수박', value: 'watermelon' },
    ],
    menuKey: 'value',
    menuLabel: 'label',
    helperText: 'This is HelperText',
  },
}
