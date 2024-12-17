import { default as React, ReactNode } from '../../../../../node_modules/react';
export interface CheckboxProps {
    checked?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
    defaultChecked?: boolean;
    disabled?: boolean;
    id?: string;
    indeterminate?: boolean;
    label?: string;
    size?: 'small' | 'medium' | 'large';
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: ReactNode;
    checkedIcon?: ReactNode;
}
export declare const Checkbox: ({ color, checked, defaultChecked, disabled, id, indeterminate, label, size, value, onChange, ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
