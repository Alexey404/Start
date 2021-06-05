import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { AppStateType } from '../../Redux/redux-store.js'
import { follow, unfollow } from '../../Redux/users-reducer'
import { DivFullGray } from '../common/FormControls/FullGrayStyled.js'
import {
  Name,
  StatusUserS,
  StyledItem,
  UserFollow,
  UserFollowContainer,
} from './StyledUser.js'
import styles from './user.module.scss'

type Props = {
  user: any
}

const User: React.FC<Props> = ({ user }) => {
  const { followingInProgress, isFetching } = useSelector(
    (state: AppStateType) => state.userPage
  )
  const history = useHistory()
  const dispatch = useDispatch()

  const Unfollow = (id: number) => {
    dispatch(unfollow(id))
  }
  const Follow = (id: number) => {
    dispatch(follow(id))
  }

  const Url = (id: any) => {
    history.push({
      pathname: `/profile`,
      search: `?userId=${id}`,
    })
  }

  return (
    <StyledItem>
      <div>
        <div>
          <div
            onClick={() => {
              Url(user.id)
            }}
          >
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
          </div>
        </div>
      </div>
      <div>
        <Name
          style={{ cursor: 'pointer' }}
          onClick={() => {
            Url(user.id)
          }}
        >
          {!isFetching ? user.name : <DivFullGray />}
        </Name>
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
                Unfollow(user.id)
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
                Follow(user.id)
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
