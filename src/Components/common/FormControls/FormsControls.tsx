import { Field } from 'redux-form'
import { FieldValidator } from '../../../utils/validators'
import { InputStiled } from './FormControlsStyled'

export const Input = (props: any) => {
  const errorTouched =
    props.valideLogin === 'touched' ? props.meta.touched : undefined

  const hasError =
    props.meta.error === 'Field is required'
      ? undefined
      : props.meta.error || errorTouched

  const Color = hasError && errorTouched ? 'red' : ''

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
  Placeholder: string,
  name: string | null,
  validators: Array<FieldValidator> | null,
  component: string | React.Component | React.FC,
  props: any
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
