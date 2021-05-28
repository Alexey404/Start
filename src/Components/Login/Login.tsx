import { connect } from 'react-redux'
import { InjectedFormProps, reduxForm } from 'redux-form'
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
import { AppStateType } from '../../Redux/redux-store'

const maxLenght = maxLenghtCreator(20)
const minLenght = minLenghtCreator(5)

type MapStateProps = {
  isAuth: boolean
  isFetchingLogin: boolean
}
type MapDispatchProps = {
  loginAuth: (email: string, password: string, rememberMe: boolean) => void
}

type LoginFrmValue = {
  Login: string
  Password: string
  checkbox: boolean
}

type IProps = {
  isFetchingLogin: boolean
}

const Login: React.FC<MapStateProps & MapDispatchProps> = props => {
  const onSubmit = (formData: LoginFrmValue) => {
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

const LoginForm: React.FC<InjectedFormProps<LoginFrmValue, IProps> & IProps> =
  ({ handleSubmit, error, isFetchingLogin }) => {
    return (
      <form onSubmit={handleSubmit}>
        {CreateFilde(
          'Login',
          'Login',
          [required, maxLenght, minLenght],
          Input,
          {
            valideLogin: 'touched',
          }
        )}
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

const mapStateToPropsForRedirect = (state: AppStateType): MapStateProps => ({
  isAuth: state.auth.isAuth,
  isFetchingLogin: state.auth.isFetchingLogin,
})

const LoginReduxForm = reduxForm<LoginFrmValue, IProps>({
  form: 'login',
})(LoginForm)

export default connect(mapStateToPropsForRedirect, { loginAuth })(Login)
