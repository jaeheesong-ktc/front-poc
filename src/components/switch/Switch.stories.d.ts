import { StoryObj } from '@storybook/react';
import { SwitchProps } from './Switch';
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
type Story = StoryObj<SwitchProps>;
export declare const Default: Story;
export declare const Color: Story;
export declare const Size: Story;
export declare const Disabled: Story;
