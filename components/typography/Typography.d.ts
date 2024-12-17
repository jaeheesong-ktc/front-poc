import { ReactNode } from '../../../../../node_modules/react';
type VariantOptions = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline';
type AlignOptions = 'left' | 'center' | 'right' | 'justify';
type ColorOptions = 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'textPrimary' | 'textSecondary' | 'textDisabled';
interface TypographyProps {
    id?: string;
    variant?: VariantOptions;
    align?: AlignOptions;
    color?: ColorOptions;
    children?: ReactNode;
}
export declare const Typography: ({ id, children, variant, align, color, ...props }: TypographyProps) => import("react/jsx-runtime").JSX.Element;
export {};
