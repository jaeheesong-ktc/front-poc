import { StoryObj } from '@storybook/react';
import { CheckboxProps } from './Checkbox';
interface IMeta {
    title: string;
    component: object;
    parameters: object;
    tags: string[];
    args?: object;
    argTypes: object;
    render?: any;
}
declare const meta: IMeta;
export default meta;
type Story = StoryObj<CheckboxProps>;
export declare const Default: Story;
export declare const Indeterminate: {
    render: () => void;
};
export declare const Color: Story;
export declare const Size: Story;
export declare const Disabled: Story;
