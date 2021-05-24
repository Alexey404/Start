import { connect } from 'react-redux'
import { logout } from '../../Redux/auth-reducer'
import Header from './Header'
import { getProfile, getStatus } from '../../Redux/profile-reducer'
import { requestUsers } from '../../Redux/users-reducer'

const HeaderContainer = props => {
  return (
    <div>
      <Header {...props} />
    </div>
  )
}

const mapStateToProps = state => ({
  resultCode: state.auth.resultCode,
  login: state.auth.data.login,
  id: state.auth.data.id,
  isAuth: state.auth.isAuth,
  clickAll: state.app.clickAll,
  pageSize: state.userPage.pageSize,
  currentPage: state.userPage.currentPage,
})

export default connect(mapStateToProps, {
  logout,
  getProfile,
  getStatus,
  requestUsers,
})(HeaderContainer)
