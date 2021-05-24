<<<<<<< HEAD
import { Field } from 'redux-form'
import { InputStiled } from './FormControlsStyled'

export const Input = (props) => {
  let errorTouched =
    props.valideLogin === 'touched' ? props.meta.touched : undefined

  let hasError =
    props.meta.error === 'Field is required'
      ? undefined
      : props.meta.error || errorTouched

  let Color = hasError && errorTouched ? 'red' : ''
=======
import React from 'react'
import { InputStiled } from './FormControlsStyled'

export const Input = props => {
  const hasError = props.meta.touched && props.meta.error

  let Color = hasError ? 'red' : ''
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1

  return (
    <div>
      <div>
<<<<<<< HEAD
        <InputStiled {...props.input} color={Color} {...props} />
      </div>
      {errorTouched && hasError ? <span>{props.meta.error}</span> : undefined}
    </div>
  )
}

export const CreateFilde = (
  Placeholder,
  name,
  validators,
  component,
  props
) => (
  <div>
    <Field
      name={name}
      placeholder={Placeholder}
      validate={validators}
      component={component}
      valideLogin={'touched'}
      {...props}
    />
  </div>
)
=======
        <InputStiled {...props.input} color={Color} />
      </div>
      {hasError && <span>{props.meta.error}</span>}
    </div>
  )
}
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
