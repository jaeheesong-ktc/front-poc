import { ReactNode } from '../../../../../node_modules/react';
export interface RadioGroupProps {
    direction?: 'row' | 'column';
    name?: string;
    children?: ReactNode;
}
export declare const RadioGroup: ({ direction, name, children, ...props }: RadioGroupProps) => import("react/jsx-runtime").JSX.Element;
