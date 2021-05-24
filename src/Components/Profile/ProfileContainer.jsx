import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {
  getProfile,
  setUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
} from '../../Redux/profile-reducer'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import Profile from './profile'

const ProfileContainer = (props) => {
  useEffect(() => {
    let userId = props.match.params.userId
    props.getProfile(userId)
    props.getStatus(userId)
    console.log('Хрень')
  }, [])

  return <Profile {...props} />
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  login: state.auth.data.login,
  id: state.auth.data.id,
  isFetchingProfile: state.profilePage.isFetchingProfile,
})

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfile,
    getStatus,
    updateStatus,
    savePhoto,
  }),
  withAuthRedirect,
  withRouter
)(ProfileContainer)
