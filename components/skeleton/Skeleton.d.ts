interface SkeletonProps {
    animation?: 'pulse' | 'wave' | false;
    height?: number | string;
    variant?: 'circular' | 'rectangular' | 'rounded';
    width?: number | string;
}
export declare const Skeleton: ({ animation, height, variant, width, ...props }: SkeletonProps) => import("react/jsx-runtime").JSX.Element;
export {};
