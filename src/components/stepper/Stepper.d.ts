import { ReactNode } from '../../../../../node_modules/react';
export interface StepperProps {
    activeStep?: string | number;
    children: ReactNode;
}
export declare const Stepper: ({ activeStep, children }: StepperProps) => import("react/jsx-runtime").JSX.Element;
