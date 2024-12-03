import { StoryObj } from '@storybook/react';
import { IconButtonProps } from './IconButton';
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
type Story = StoryObj<IconButtonProps>;
export declare const Default: Story;
export declare const Color: Story;
export declare const Disabled: Story;
