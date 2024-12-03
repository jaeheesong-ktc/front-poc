import { StoryObj } from '@storybook/react';
import { ButtonProps } from './Button';
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
type Story = StoryObj<ButtonProps>;
export declare const Default: Story;
export declare const Color: Story;
export declare const Disable: Story;
export declare const Loading: Story;
export declare const Variant: Story;
export declare const Size: Story;
export declare const StartIcon: Story;
export declare const EndIcon: Story;
