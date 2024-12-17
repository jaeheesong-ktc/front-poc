import { ReactNode } from '../../../../../node_modules/react';
interface DividerProps {
    variant?: 'fullWidth' | 'middle';
    orientation?: 'horizontal' | 'vertical';
    textAlign?: 'left' | 'center' | 'right';
    children?: ReactNode;
}
export declare const Divider: ({ variant, orientation, textAlign, ...props }: DividerProps) => import("react/jsx-runtime").JSX.Element;
export {};
