export interface ChipProps {
    id?: string;
    label?: string;
    variant?: 'filled' | 'outlined';
    size?: 'small' | 'medium';
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    clickable?: boolean;
    onClick?: (event?: MouseEvent) => void;
    deletable?: boolean;
    onDelete?: (event?: MouseEvent) => void;
}
export declare const Chip: ({ id, label, variant, size, color, clickable, onClick, deletable, onDelete, ...props }: ChipProps) => import("react/jsx-runtime").JSX.Element;
