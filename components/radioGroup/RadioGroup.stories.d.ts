import { StoryObj } from '@storybook/react';
import { RadioGroupProps } from './RadioGroup';
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
type Story = StoryObj<RadioGroupProps>;
export declare const Default: Story;
