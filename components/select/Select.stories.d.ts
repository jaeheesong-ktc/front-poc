import { StoryObj } from '@storybook/react';
import { SelectProps } from './Select';
interface IMeta {
    title: string;
    component: object;
    parameters?: any;
    tags: string[];
    args?: object;
    argTypes: object;
    render?: any;
}
declare const meta: IMeta;
export default meta;
type Story = StoryObj<SelectProps>;
export declare const Default: Story;
export declare const LabelAlign: Story;
export declare const Variant: Story;
export declare const Size: Story;
export declare const Status: Story;
export declare const MultiSelect: Story;
