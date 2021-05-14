import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
} from "../../Redux/users-reducer";
import Users from "./Users";
import styles from "./user.module.scss";
import Preloader from "../Preloader/Preloader";
import Pagination from "../Pagination/Pagination";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (p) => {
    this.props.getUsers(p, this.props.pageSize);
  };

  render() {
    return (
      <div>
        <Pagination
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
        />
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <div className={styles.container}>
            <div className={styles.containerUsers}>
              <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
    followingInProgress: state.userPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
})(UsersContainer);
