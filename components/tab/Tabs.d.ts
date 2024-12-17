import { ReactNode } from '../../../../../node_modules/react';
export interface TabsProps {
    value: string | number;
    children: ReactNode;
    onChange?: (value: string | number) => void;
    variant?: 'standard' | 'filled' | 'outlined';
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    fullWidth?: boolean;
}
export declare const Tabs: ({ value, onChange, children, variant, color, fullWidth, }: TabsProps) => import("react/jsx-runtime").JSX.Element;
