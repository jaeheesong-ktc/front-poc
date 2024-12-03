import { default as React } from '../../../../../node_modules/react';
export interface SwitchProps {
    color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning';
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    label?: string;
    name?: string;
    size?: 'small' | 'medium' | 'large';
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Switch: ({ color, checked, defaultChecked, disabled, label, name, size, onChange, ...props }: SwitchProps) => import("react/jsx-runtime").JSX.Element;
