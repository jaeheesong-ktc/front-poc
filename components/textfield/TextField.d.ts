import { default as React } from '../../../../../node_modules/react';
type ColorOptions = 'primary' | 'secondary' | 'error' | 'success' | 'warning';
type SizeOptions = 'small' | 'medium' | 'large';
type VariantOptions = 'filled' | 'outlined' | 'standard';
type TypeOptions = 'text' | 'date' | 'datetime-local' | 'file' | 'password';
interface TextFieldProps {
    id?: string | any;
    label?: string;
    value?: string;
    variant?: VariantOptions;
    placeholder?: string | any;
    color?: ColorOptions;
    required?: boolean | any;
    size?: SizeOptions;
    type?: TypeOptions;
    style?: React.CSSProperties;
    error?: boolean;
    disabled?: boolean | any;
    multiline?: boolean;
    rows?: number | undefined;
    helperText?: string;
    readOnly?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
export declare const TextField: ({ id, label, value, variant, placeholder, color, required, size, type, style, error, disabled, multiline, rows, helperText, readOnly, onChange, ...props }: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
