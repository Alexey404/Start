import React from 'react'
import { InputStiled } from './FormControlsStyled'

export const Input = props => {
  const hasError = props.meta.touched && props.meta.error

  let Color = hasError ? 'red' : ''

  return (
    <div>
      <div>
        <InputStiled {...props.input} color={Color} />
      </div>
      {hasError && <span>{props.meta.error}</span>}
    </div>
  )
}
