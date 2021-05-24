<<<<<<< HEAD
import React, { useEffect } from 'react'
=======
import React from 'react'
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {
  getProfile,
  setUserProfile,
  getStatus,
  updateStatus,
<<<<<<< HEAD
  savePhoto,
=======
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
} from '../../Redux/profile-reducer'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import Profile from './profile'

<<<<<<< HEAD
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
=======
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
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
})

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfile,
    getStatus,
    updateStatus,
<<<<<<< HEAD
    savePhoto,
=======
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  }),
  withAuthRedirect,
  withRouter
)(ProfileContainer)
