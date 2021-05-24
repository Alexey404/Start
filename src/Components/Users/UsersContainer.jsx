import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import styles from './user.module.scss'
import { follow, unfollow, requestUsers } from '../../Redux/users-reducer'
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

const UsersContainer = (props) => {
  useEffect(() => {
    props.requestUsers(props.currentPage, props.pageSize)
    console.log('Robit')
  }, [])

  const onPageChanged = (p) => {
    props.requestUsers(p, props.pageSize)
  }

  return (
    <div>
      <Pagination
        onPageChanged={onPageChanged}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
      />
      <div className={styles.container}>
        <div className={styles.containerUsers}>
          <Users {...props} />
        </div>
      </div>
      <Pagination
        onPageChanged={onPageChanged}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
      />
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    requestUsers,
  }),
  withAuthRedirect
)(UsersContainer)
