<<<<<<< HEAD
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
=======
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import styles from './user.module.scss'
import { follow, unfollow, getUsers } from '../../Redux/users-reducer'
import Users from './Users'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import Pagination from '../common/Pagination/Pagination'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = p => {
    this.props.getUsers(p, this.props.pageSize)
  }

  render() {
    return (
      <div>
        <Pagination
          onPageChanged={this.onPageChanged}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
        />
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <div className={styles.container}>
            <div className={styles.containerUsers}>
              <Users {...this.props} />
            </div>
          </div>
        )}
      </div>
    )
  }
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
}

let mapStateToProps = state => {
  return {
<<<<<<< HEAD
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
=======
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
    followingInProgress: state.userPage.followingInProgress,
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
<<<<<<< HEAD
    requestUsers,
=======
    getUsers,
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  }),
  withAuthRedirect
)(UsersContainer)
