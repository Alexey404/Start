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
import { AppStateType } from '../../Redux/redux-store'

type MapStateProps = {
  profile: any
  status: string
  login: string | null
  isFetchingProfile: boolean
}
type MapDispatchProps = {
  getProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (Status: string) => void
  savePhoto: (files: any) => void
}

type withRouterProps = {
  match: { params: { userId: number } }
}

type Props = MapStateProps & MapDispatchProps & withRouterProps

const ProfileContainer: React.FC<Props> = ({
  profile,
  status,
  login,
  isFetchingProfile,
  updateStatus,
  getStatus,
  getProfile,
  savePhoto,
  match: {
    params: { userId },
  },
}) => {
  useEffect(() => {
    getProfile(userId)
    getStatus(userId)
  }, [userId])

  return (
    <Profile
      profile={profile}
      status={status}
      login={login}
      isFetchingProfile={isFetchingProfile}
      savePhoto={savePhoto}
      updateStatus={updateStatus}
    />
  )
}

const mapStateToProps = (state: AppStateType): MapStateProps => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  login: state.auth.data.login,
  isFetchingProfile: state.profilePage.isFetchingProfile,
})

export default compose(
  connect<MapStateProps, MapDispatchProps, any, AppStateType>(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    savePhoto,
  }),
  withAuthRedirect,
  withRouter
)(ProfileContainer)
