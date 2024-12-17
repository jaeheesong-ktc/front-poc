import { ReactElement } from '../../../../../node_modules/react';
export interface TabProps {
    label?: string | ReactElement;
    value: string | number;
    disabled?: boolean;
}
export declare const Tab: ({ label, value, disabled }: TabProps) => import("react/jsx-runtime").JSX.Element;
