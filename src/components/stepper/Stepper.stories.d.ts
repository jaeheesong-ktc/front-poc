import { StepperProps } from './Stepper';
import { StoryObj } from '@storybook/react';
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
type Story = StoryObj<StepperProps>;
export declare const Default: Story;
