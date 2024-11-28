import { ReactNode, useEffect, useState } from 'react'
import StepperContext from '@kt-cloud-front/ui/components/stepper/StepperContext.tsx'

export interface StepperProps {
  activeStep?: string | number
  children: ReactNode
}

export const Stepper = ({ activeStep, children }: StepperProps) => {
  const [step, setStep] = useState<number>(activeStep | '')

  useEffect(() => {
    setStep(activeStep as number)
  }, [activeStep])

  return (
    <div className={`ktc-stepper`}>
      <StepperContext.Provider value={{ step, setStep } as any}>{children}</StepperContext.Provider>
    </div>
  )
}
