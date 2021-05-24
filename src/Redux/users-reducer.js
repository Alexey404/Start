import { usersAPI } from '../api/api'
<<<<<<< HEAD
import { updateObjectInArray } from '../utils/object-helpers'
=======
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1

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
<<<<<<< HEAD
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
=======
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
<<<<<<< HEAD
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
=======
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
        }),
      }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case TOGLE_IS_FETCHING: {
<<<<<<< HEAD
      return { ...state, isFetching: !state.isFetching }
=======
      return { ...state, isFetching: action.isFetching }
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
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
<<<<<<< HEAD
          : [state.followingInProgress.filter((id) => id !== action.userId)],
=======
          : [state.followingInProgress.filter(id => id !== action.userId)],
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
      }
    }
    default:
      return state
  }
}

///--------AC---------

export const followSuccess = userId => {
  return {
    type: FOLLOW,
    userId,
  }
}

export const unfollowSuccess = userId => {
  return {
    type: UNFOLLOW,
    userId,
  }
}
<<<<<<< HEAD
export const setCurrentPage = (currentPage) => {
=======
export const setCurrentPage = currentPage => {
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  }
}
<<<<<<< HEAD
export const setUsers = (users) => {
=======
export const setUsers = users => {
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  return {
    type: SET_USERS,
    users,
  }
}
<<<<<<< HEAD
export const setIsFetching = () => {
  return {
    type: TOGLE_IS_FETCHING,
  }
}
export const setTotalUsersCount = (count) => {
=======
export const setIsFetching = isFetching => {
  return {
    type: TOGLE_IS_FETCHING,
    isFetching,
  }
}
export const setTotalUsersCount = count => {
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
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

<<<<<<< HEAD
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
=======
export const getUsers = (currentPage, pageSize) => dispatch => {
  dispatch(setCurrentPage(currentPage))
  dispatch(setIsFetching(true))
  usersAPI.getUsers(currentPage, pageSize).then(data => {
    dispatch(setIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  })
}

export const follow = id => dispatch => {
  dispatch(toggleFollowingProgress(true, id))
  usersAPI.followApi(id).then(data => {
    if (data.resultCode === 0) {
      dispatch(followSuccess(id))
    }
    dispatch(toggleFollowingProgress(false, id))
  })
}

export const unfollow = id => dispatch => {
  dispatch(toggleFollowingProgress(true, id))
  usersAPI.unfollowApi(id).then(data => {
    if (data.resultCode === 0) {
      dispatch(unfollowSuccess(id))
    }
    dispatch(toggleFollowingProgress(false, id))
  })
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
}

export default userReducer
