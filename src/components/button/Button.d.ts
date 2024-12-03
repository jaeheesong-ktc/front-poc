import { default as React, ReactNode } from '../../../../../node_modules/react';
export interface ButtonProps {
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
    disabled?: boolean;
    href?: string;
    label?: string;
    loading?: boolean;
    size?: 'small' | 'medium' | 'large';
    variant?: 'filled' | 'outlined' | 'standard';
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const Button: ({ color, disabled, href, label, loading, size, variant, onClick, startIcon, endIcon, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
