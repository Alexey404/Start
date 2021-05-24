<<<<<<< HEAD
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import {
  maxLenghtCreator,
  minLenghtCreator,
  required,
} from '../../utils/validators'
import { CreateFilde, Input } from '../common/FormControls/FormsControls'
=======
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLenghtCreator, required } from '../../utils/validators'
import { Input } from '../common/FormControls/FormsControls'
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
import {
  LoginFormStyled,
  LoginFormContStyled,
  LoginBTNStyled,
<<<<<<< HEAD
  FormError,
} from './StiledLogin'
import { loginAuth } from '../../Redux/auth-reducer'
import { Redirect } from 'react-router'

const maxLenght = maxLenghtCreator(20)
const minLenght = minLenghtCreator(5)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginAuth(formData.Login, formData.Password, formData.checkbox)
  }

  if (props.isAuth) {
    return <Redirect to='/news' />
=======
} from './StiledLogin'

const maxLenght = maxLenghtCreator(10)

let Login = props => {
  const onSubmit = formData => {
    console.log(formData)
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  }
  return (
    <LoginFormStyled>
      <LoginFormContStyled>
        <h1>Login</h1>
<<<<<<< HEAD
        <LoginReduxForm onSubmit={onSubmit} {...props} />
=======
        <LoginReduxForm onSubmit={onSubmit} />
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
      </LoginFormContStyled>
    </LoginFormStyled>
  )
}

<<<<<<< HEAD
const LoginForm = ({ handleSubmit, error, isFetchingLogin }) => {
  return (
    <form onSubmit={handleSubmit}>
      {CreateFilde('Login', 'Login', [required, maxLenght, minLenght], Input, {
        valideLogin: 'touched',
      })}
      {CreateFilde(
        'Password',
        'Password',
        [required, maxLenght, minLenght],
        Input,
        { type: 'password', valideLogin: 'touched' }
      )}
      <div>
        {CreateFilde('checkbox', null, null, 'input', { type: 'checkbox' })}
        Remember me
      </div>
      {error && <FormError>{error}</FormError>}
      <div>
        <LoginBTNStyled disabled={isFetchingLogin}>Login</LoginBTNStyled>
=======
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
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
      </div>
    </form>
  )
}

<<<<<<< HEAD
const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
  isFetchingLogin: state.auth.isFetchingLogin,
})

=======
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)

<<<<<<< HEAD
export default connect(mapStateToPropsForRedirect, { loginAuth })(Login)
=======
export default Login
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
