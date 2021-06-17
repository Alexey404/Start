import { InputStiled } from './FormControlsStyled'

export const Input = (props: any) => {
  // const errorTouched =
  //   props.valideLogin === 'touched' ? props.meta.touched : undefined

  // const hasError =
  //   props.meta.error === 'Field is required'
  //     ? undefined
  //     : props.meta.error || errorTouched

  // const Color = hasError && errorTouched ? 'red' : ''

  return (
    <div>
      <div>
        <InputStiled
          //  color={Color}
          {...props}
        />
      </div>
      {/* {errorTouched && hasError ? <span>{props.meta.error}</span> : undefined} */}
    </div>
  )
}
