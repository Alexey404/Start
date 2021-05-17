import React from 'react'
import MyPostsContainer from './MyPosts/MyPostContainer'
import style from './profile.module.scss'
import ProfileInfo from './profileInfo'

let Profile = props => {
  return (
    <div className={style.profile}>
      <div className={style.container}>
        <ProfileInfo
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          login={props.login}
        />
        <MyPostsContainer />
      </div>
    </div>
  )
}

export default Profile
