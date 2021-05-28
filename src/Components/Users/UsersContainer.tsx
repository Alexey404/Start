import React, { useEffect, useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import styles from './user.module.scss'
import {
  follow,
  unfollow,
  requestUsers,
  setCurrentPage,
} from '../../Redux/users-reducer'
import Users from './Users'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import Pagination from '../common/Pagination/Pagination'
import {
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from '../../Redux/users-selectors'
import { AppStateType } from '../../Redux/redux-store'
import { useHistory, withRouter } from 'react-router'

type MapStateProps = {
  users: any
  pageSize: number
  totalUsersCount: number
  isFetching: boolean
  followingInProgress: Array<number>
}
type MapDispatchProps = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  requestUsers: (currentP: number, pSize: number) => void
  setCurrentPage: (currentP: number) => void
}

type withRouterProps = {
  match: { params: { CurrentPage: number; PageSize: number } }
}

type Props = MapStateProps & MapDispatchProps & withRouterProps

const UsersContainer: React.FC<Props> = ({
  totalUsersCount,
  pageSize,
 
  users,
  followingInProgress,
  isFetching,
  match: {
    params: { CurrentPage, PageSize },
  },
  requestUsers,
  follow,
  unfollow,
  setCurrentPage,
}) => {
  const router = useHistory()
  const [CurrentPageLocal, setCurrentPageLocal] = useState(CurrentPage)

  useEffect(() => {
    router.push(`/users/${CurrentPageLocal || 1}/${pageSize}`)
    setCurrentPage(CurrentPageLocal)
  }, [CurrentPageLocal])

  useEffect(() => {
    requestUsers(CurrentPage, PageSize)
    console.log('Запрос пошёл')
    console.log(CurrentPage)
  }, [CurrentPage])

  return (
    <div>
      <Pagination
        setCurrentPageLocal={setCurrentPageLocal}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={CurrentPageLocal}
      />
      <div className={styles.container}>
        <div className={styles.containerUsers}>
          <Users
            users={users}
            follow={follow}
            unfollow={unfollow}
            followingInProgress={followingInProgress}
            isFetching={isFetching}
          />
        </div>
      </div>
      <Pagination
        setCurrentPageLocal={setCurrentPageLocal}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={CurrentPageLocal}
      />
    </div>
  )
}

const mapStateToProps = (state: AppStateType): MapStateProps => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect<MapStateProps, MapDispatchProps, any, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    requestUsers,
    setCurrentPage,
  }),
  withAuthRedirect,
  withRouter
)(UsersContainer)
