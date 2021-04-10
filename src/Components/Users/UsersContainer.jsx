import react from "react";
import { connect } from "react-redux";
import { followAC, setUsers, unfollowAC } from "../../Redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsers(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
