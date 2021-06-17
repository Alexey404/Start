import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { loginAuth } from '../../Redux/auth-reducer'
import { AppStateType } from '../../Redux/redux-store'
import { LoginFormContStyled, LoginFormStyled } from './StiledLogin'

const Login: React.FC = () => {
  const { isAuth } = useSelector((state: AppStateType) => state.auth)

  if (isAuth) {
    return <Redirect to='/news' />
  }
  return (
    <LoginFormStyled>
      <LoginFormContStyled>
        <h1>Login</h1>
        <LoginForm />
      </LoginFormContStyled>
    </LoginFormStyled>
  )
}

const LoginForm: React.FC = () => {
  const { isFetchingLogin } = useSelector((state: AppStateType) => state.auth)
  const dispatch = useDispatch()

  const submit = (values: any) => {
    dispatch(loginAuth(values.Login, values.Password, values.checkbox))
  }

  return (
    <Formik
      initialValues={{ Login: '', Password: '', checkbox: '' }}
      onSubmit={submit}
    >
      <Form>
        <Field type='Login' name='Login' component={'input'} />
        <Field type='Password' name='Password' component={'input'} />
        <div>
          <Field type='checkbox' name='checkbox' />
          Remember me
        </div>
        <button disabled={isFetchingLogin} type='submit'>
          Login
        </button>
      </Form>
    </Formik>
  )
}

export default Login
