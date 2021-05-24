import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import {
  maxLenghtCreator,
  minLenghtCreator,
  required,
} from '../../utils/validators'
import { CreateFilde, Input } from '../common/FormControls/FormsControls'
import {
  LoginFormStyled,
  LoginFormContStyled,
  LoginBTNStyled,
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
  }
  return (
    <LoginFormStyled>
      <LoginFormContStyled>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} {...props} />
      </LoginFormContStyled>
    </LoginFormStyled>
  )
}

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
      </div>
    </form>
  )
}

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
  isFetchingLogin: state.auth.isFetchingLogin,
})

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)

export default connect(mapStateToPropsForRedirect, { loginAuth })(Login)
