<<<<<<< HEAD
import User from './User.jsx'

const Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <User key={u.id} {...props} user={u} />
=======
import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Name,
  StyledItem,
  UserFollow,
  UserFollowContainer,
  StatusUserS,
} from './StyledUser.js'
import styles from './user.module.scss'

let Users = props => {
  return (
    <div>
      {props.users.map(u => (
        <StyledItem key={u.id}>
          <div>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : 'https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png'
                  }
                  alt=''
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
          </div>
          <div>
            <Name>{u.name}</Name>
            <StatusUserS>{u.status}</StatusUserS>
          </div>
          <UserFollowContainer>
            {u.followed ? (
              <UserFollow
                disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => {
                  props.unfollow(u.id)
                }}
              >
                Unfollow
              </UserFollow>
            ) : (
              <UserFollow
                disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => {
                  props.follow(u.id)
                }}
              >
                Follow
              </UserFollow>
            )}
          </UserFollowContainer>
        </StyledItem>
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
      ))}
    </div>
  )
}
export default Users
