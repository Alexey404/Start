<<<<<<< HEAD
import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../Redux/auth-reducer'
import Header from './Header'
import { getProfile, getStatus } from '../../Redux/profile-reducer'
import { requestUsers } from '../../Redux/users-reducer'

const HeaderContainer = (props) => {
  return (
    <div>
      <Header {...props} />
    </div>
  )
=======
import React from "react";
import { connect } from "react-redux";
import { getAuth } from "../../Redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
      </div>
    );
  }
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
}

const mapStateToProps = (state) => ({
  resultCode: state.auth.resultCode,
  login: state.auth.data.login,
<<<<<<< HEAD
  id: state.auth.data.id,
  isAuth: state.auth.isAuth,
  clickAll: state.app.clickAll,
  pageSize: state.userPage.pageSize,
  currentPage:state.userPage.currentPage
})

export default connect(mapStateToProps, {
  logout,
  getProfile,
  getStatus,
  requestUsers,
})(HeaderContainer)
=======
});

export default connect(mapStateToProps, { getAuth })(HeaderContainer);
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
