import { ChipProps } from '../chip/Chip.tsx';
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
type Story = StoryObj<ChipProps>;
export declare const Default: Story;
export declare const Variant: Story;
export declare const Color: Story;
export declare const Size: Story;
export declare const Clickable: Story;
export declare const Deletable: Story;
