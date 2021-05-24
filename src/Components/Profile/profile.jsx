<<<<<<< HEAD
=======
import React from 'react'
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
import MyPostsContainer from './MyPosts/MyPostContainer'
import style from './profile.module.scss'
import ProfileInfo from './profileInfo'

<<<<<<< HEAD
const Profile = (props) => {
=======
let Profile = props => {
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  return (
    <div className={style.profile}>
      <div className={style.container}>
        <ProfileInfo
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          login={props.login}
<<<<<<< HEAD
          isFetchingProfile={props.isFetchingProfile}
          savePhoto={props.savePhoto}
=======
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
        />
        <MyPostsContainer />
      </div>
    </div>
  )
}

export default Profile
