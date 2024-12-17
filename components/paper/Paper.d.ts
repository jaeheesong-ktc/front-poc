import { default as React, ReactNode } from '../../../../../node_modules/react';
type VariantOptions = 'outlined' | 'elevation';
type ElevationOptions = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
interface PaperProps {
    id?: string;
    variant?: VariantOptions;
    elevation?: ElevationOptions;
    children?: ReactNode;
    style?: React.CSSProperties;
}
export declare const Paper: ({ id, children, variant, elevation, style, ...props }: PaperProps) => import("react/jsx-runtime").JSX.Element;
export {};
