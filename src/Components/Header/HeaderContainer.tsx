import { connect } from 'react-redux'
import { Logout } from '../../Redux/auth-reducer'
import Header from './Header'
import { getProfile, getStatus } from '../../Redux/profile-reducer'
import { AppStateType } from '../../Redux/redux-store'

type MapStateProps = {
  resultCode: string
  login: string | null
  id: number | null
  isAuth: boolean
  clickAll: boolean
  pageSize: number
  currentPage: number
}
type MapDispatchProps = {
  Logout: () => void
  getProfile: (id: number | null) => void
  getStatus: (id: number | null) => void
}

type Props = MapStateProps & MapDispatchProps

const HeaderContainer: React.FC<Props> = props => {
  return (
    <div>
      <Header {...props} />
    </div>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  resultCode: state.auth.resultCode,
  login: state.auth.data.login,
  id: state.auth.data.id,
  isAuth: state.auth.isAuth,
  clickAll: state.app.clickAll,
  pageSize: state.userPage.pageSize,
  currentPage: state.userPage.currentPage,
})

export default connect<MapStateProps, any, any, AppStateType>(mapStateToProps, {
  Logout,
  getProfile,
  getStatus,
})(HeaderContainer)
