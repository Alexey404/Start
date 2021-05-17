import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {
  getProfile,
  setUserProfile,
  getStatus,
  updateStatus,
} from '../../Redux/profile-reducer'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import Profile from './profile'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    this.props.getProfile(userId)
    this.props.getStatus(userId)
    console.log(userId)
  }
  render() {
    return <Profile {...this.props} />
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  login: state.auth.login,
})

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfile,
    getStatus,
    updateStatus,
  }),
  withAuthRedirect,
  withRouter
)(ProfileContainer)
