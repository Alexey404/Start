import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLenghtCreator, required } from '../../utils/validators'
import { Input } from '../common/FormControls/FormsControls'
import {
  LoginFormStyled,
  LoginFormContStyled,
  LoginBTNStyled,
} from './StiledLogin'

const maxLenght = maxLenghtCreator(10)

let Login = props => {
  const onSubmit = formData => {
    console.log(formData)
  }
  return (
    <LoginFormStyled>
      <LoginFormContStyled>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </LoginFormContStyled>
    </LoginFormStyled>
  )
}

let LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={'Login'}
          placeholder={'Login'}
          validate={[required, maxLenght]}
          component={Input}
        />
      </div>
      <div>
        <Field
          name={'Password'}
          placeholder={'Password'}
          validate={[required, maxLenght]}
          component={Input}
        />
      </div>
      <div>
        <Field name={'checkbox'} type={'checkbox'} component={'input'} />
        Remember me
      </div>
      <div>
        <LoginBTNStyled>Login</LoginBTNStyled>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)

export default Login
