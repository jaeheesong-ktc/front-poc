import { ReactNode } from '../../../../../node_modules/react';
export interface IMenuList {
    [key: string]: any;
}
export interface SelectProps {
    value: any;
    onChange: (e: any | any[]) => void;
    menuList: IMenuList[];
    menuKey?: string;
    menuLabel?: string;
    variant?: 'outlined' | 'standard';
    size?: 'small' | 'medium';
    error?: boolean;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    multiple?: boolean;
    placeholder?: string;
    helperText?: string;
    id?: string;
    label?: ReactNode;
    labelAlign?: 'vertical' | 'horizontal';
}
export declare const Select: ({ value, menuList, menuKey, menuLabel, variant, size, labelAlign, error, required, disabled, readOnly, multiple, placeholder, helperText, onChange, id, label, ...props }: SelectProps) => import("react/jsx-runtime").JSX.Element;
