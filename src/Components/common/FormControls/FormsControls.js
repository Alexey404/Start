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

  return (
    <div>
      <div>
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
