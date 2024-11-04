import React, { ReactNode } from 'react';
import { Radio } from '@kt-cloud-front/ui/components/radio/Radio';
import './radiogroup.scss'

export interface RadioGroupProps {
  direction?: 'row' | 'column'
  name?: any
  children?: ReactNode
}

export const RadioGroup = ({
                             direction='row',
                             name,
                             children,
                             ...props
                           }: RadioGroupProps) => {
  return (
    <div className={`storybook-radio-group-${direction}`}>
      {React.Children.map(children, (child: any) => {
        if (React.isValidElement(child) && child.type === Radio) {
          return React.cloneElement(child, {
            name,
          })
        }
        return child
      })}
    </div>
  )
}