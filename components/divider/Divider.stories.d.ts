import { StoryObj } from '@storybook/react';
import { FunctionComponent } from '../../../../../node_modules/react';
interface IMeta {
    title: string;
    component: FunctionComponent;
    tags: string[];
    args?: {};
    argTypes: object;
    render?: any;
}
declare const meta: IMeta;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Variant: Story;
export declare const Orientation: Story;
export declare const TextAlign: Story;