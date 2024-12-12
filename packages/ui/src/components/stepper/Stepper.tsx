import { ReactNode, useEffect, useState } from 'react'
import StepperContext from '@kt-cloud-front/ui/components/stepper/StepperContext'

export interface StepperProps {
  activeStep?: string | number
  children: ReactNode
}

export const Stepper = ({ activeStep, children }: StepperProps) => {
  const [step, setStep] = useState<number | string>(activeStep as number | string)

  useEffect(() => {
    setStep(activeStep as number | string)
  }, [activeStep])

  return (
    <div className={`ktc-stepper`}>
      <StepperContext.Provider value={{ step, setStep } as any}>{children}</StepperContext.Provider>
    </div>
  )
}
