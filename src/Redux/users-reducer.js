import { usersAPI } from '../api/api'
import { updateObjectInArray } from '../utils/object-helpers'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING'
const TOGLE_IS_FOLLOWING_PROGRESS = 'TOGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}

let userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
        }),
      }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case TOGLE_IS_FETCHING: {
      return { ...state, isFetching: !state.isFetching }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case TOGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter((id) => id !== action.userId)],
      }
    }
    default:
      return state
  }
}

///--------AC---------

export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId,
  }
}

export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  }
}
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  }
}
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  }
}
export const setIsFetching = () => {
  return {
    type: TOGLE_IS_FETCHING,
  }
}
export const setTotalUsersCount = (count) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count,
  }
}
export const toggleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  }
}

///--------Thunk---------

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(currentPage))
  dispatch(setIsFetching())
  let data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(setIsFetching())
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, id))
  let data = await apiMethod(id)
  if (data.resultCode === 0) {
    dispatch(actionCreator(id))
  }
  dispatch(toggleFollowingProgress(false, id))
}

export const follow = (id) => async (dispatch) => {
  followUnfollowFlow(dispatch, id, usersAPI.followApi.bind(id), followSuccess)
}

export const unfollow = (id) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    id,
    usersAPI.unfollowApi.bind(id),
    unfollowSuccess
  )
}

export default userReducer
