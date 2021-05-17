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
}

let mapStateToProps = state => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
    followingInProgress: state.userPage.followingInProgress,
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
  }),
  withAuthRedirect
)(UsersContainer)
