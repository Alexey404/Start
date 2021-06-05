import { ComponentType, FC } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { AppStateType } from '../Redux/redux-store'

type MapStateProps = {
  isAuth: boolean
}

export function WithAuthRedirect<WCP>(WrappedComponent: ComponentType<WCP>) {
  const RedirectComponent: FC<MapStateProps> = props => {
    const { isAuth, ...restProps } = props
    if (!isAuth) {
      return <Redirect to='/' />
    }
    return <WrappedComponent {...(restProps as WCP)} />
  }

  const mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
  })

  const ConnectedAuthRedirectComponent = connect<
    MapStateProps,
    null,
    WCP,
    AppStateType
  >(mapStateToPropsForRedirect)(RedirectComponent)
  return ConnectedAuthRedirectComponent
}

export default WithAuthRedirect
