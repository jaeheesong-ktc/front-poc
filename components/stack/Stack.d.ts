interface StackProps {
    children?: any;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'space-between';
    spacing?: number;
}
export declare const Stack: ({ children, direction, alignItems, justifyContent, spacing, }: StackProps) => import("react/jsx-runtime").JSX.Element;
export {};
