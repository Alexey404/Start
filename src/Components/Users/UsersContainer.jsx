import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((Response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(Response.data.items);
        this.props.setTotalUsersCount(Response.data.totalCount);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((Response) => {
        this.props.setUsers(Response.data.items);
        this.props.setIsFetching(false);
      });
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
          />
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
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
})(UsersContainer);
