import { default as React } from '../../../../../node_modules/react';
export interface RadioProps {
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
    defaultChecked?: boolean;
    disabled?: boolean;
    id?: string;
    name?: any;
    label?: string;
    size?: 'small' | 'medium' | 'large';
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Radio: ({ color, defaultChecked, disabled, id, label, name, size, value, onChange, ...props }: RadioProps) => import("react/jsx-runtime").JSX.Element;
