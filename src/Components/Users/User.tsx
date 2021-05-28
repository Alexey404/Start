import { NavLink } from 'react-router-dom'
import { DivFullGray } from '../common/FormControls/FullGrayStyled.js'
import {
  Name,
  StyledItem,
  UserFollow,
  UserFollowContainer,
  StatusUserS,
} from './StyledUser.js'
import styles from './user.module.scss'

type Props = {
  user: any
  unfollow: (id: number) => void
  follow: (id: number) => void
  followingInProgress: Array<number>
  isFetching: boolean
}

const User: React.FC<Props> = ({
  user,
  unfollow,
  follow,
  followingInProgress,
  isFetching,
}) => {
  return (
    <StyledItem>
      <div>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <div className={styles.userPhoto}>
              {!isFetching ? (
                <img
                  src={
                    user.photos.small != null
                      ? user.photos.small
                      : 'https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png'
                  }
                  alt=''
                  className={styles.userPhoto}
                />
              ) : (
                <DivFullGray />
              )}
            </div>
          </NavLink>
        </div>
      </div>
      <div>
        <Name> {!isFetching ? user.name : <DivFullGray />}</Name>
        <StatusUserS>{!isFetching ? user.status : <DivFullGray />}</StatusUserS>
      </div>
      <UserFollowContainer>
        {!isFetching ? (
          user.followed ? (
            <UserFollow
              disabled={followingInProgress.some(
                (id: number) => id === user.id
              )}
              onClick={() => {
                unfollow(user.id)
              }}
            >
              Unfollow
            </UserFollow>
          ) : (
            <UserFollow
              disabled={followingInProgress.some(
                (id: number) => id === user.id
              )}
              onClick={() => {
                follow(user.id)
              }}
            >
              Follow
            </UserFollow>
          )
        ) : (
          <DivFullGray />
        )}
      </UserFollowContainer>
    </StyledItem>
  )
}
export default User
