import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGLE_IS_FETCHING = "TOGLE_IS_FETCHING";
const TOGLE_IS_FOLLOWING_PROGRESS = "TOGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

let userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case TOGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case TOGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter((id) => id !== action.userId)],
      };
    }
    default:
      return state;
  }
};

///--------AC---------

export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setIsFetching = (isFetching) => {
  return {
    type: TOGLE_IS_FETCHING,
    isFetching,
  };
};
export const setTotalUsersCount = (count) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count,
  };
};
export const toggleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};

///--------Thunk---------

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    usersAPI.followApi(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(id));
      }
      dispatch(toggleFollowingProgress(false, id));
    });
  };
};
export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    usersAPI.unfollowApi(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(id));
      }
      dispatch(toggleFollowingProgress(false, id));
    });
  };
};

export default userReducer;
