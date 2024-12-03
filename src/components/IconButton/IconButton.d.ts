import { default as React, ReactNode } from '../../../../../node_modules/react';
export interface IconButtonProps {
    icon: ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
    disabled?: boolean;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const IconButton: ({ color, disabled, href, onClick, ...props }: IconButtonProps) => import("react/jsx-runtime").JSX.Element;
