import { Dispatch } from 'react'
import { ThunkAction } from 'redux-thunk'
import { usersAPI } from '../api/user-api'

import { updateObjectInArray } from '../utils/object-helpers'
import { AppStateType } from './redux-store'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING'
const TOGLE_IS_FOLLOWING_PROGRESS = 'TOGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
  users: [] as any,
  pageSize: 10 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: false as boolean,
  followingInProgress: [] as Array<number>,
}

type InitialStateType = typeof initialState

const userReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
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
          : state.followingInProgress.filter(
              (id: number) => id !== action.userId
            ),
      }
    }
    default:
      return state
  }
}

///--------AC---------

type ActionsTypes =
  | FollowSuccessType
  | UnfollowSuccessType
  | SetCurrentPageType
  | SetUsersType
  | SetIsFetchingType
  | SetTotalUsersCountType
  | ToggleFollowingProgressType

type FollowSuccessType = {
  type: typeof FOLLOW
  userId: number
}

export const followSuccess = (userId: number): FollowSuccessType => {
  return {
    type: FOLLOW,
    userId,
  }
}

type UnfollowSuccessType = {
  type: typeof UNFOLLOW
  userId: number
}

export const unfollowSuccess = (userId: number): UnfollowSuccessType => {
  return {
    type: UNFOLLOW,
    userId,
  }
}

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageType => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  }
}

type SetUsersType = {
  type: typeof SET_USERS
  users: any
}

export const setUsers = (users: any): SetUsersType => {
  return {
    type: SET_USERS,
    users,
  }
}

type SetIsFetchingType = {
  type: typeof TOGLE_IS_FETCHING
}

export const setIsFetching = (): SetIsFetchingType => {
  return {
    type: TOGLE_IS_FETCHING,
  }
}

type SetTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT
  count: number
}

export const setTotalUsersCount = (count: number): SetTotalUsersCountType => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count,
  }
}

type ToggleFollowingProgressType = {
  type: typeof TOGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}

export const toggleFollowingProgress = (
  isFetching: boolean,
  userId: number
): ToggleFollowingProgressType => {
  return {
    type: TOGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  }
}

///--------Thunk---------
type DispatchType = Dispatch<ActionsTypes>
type Thank = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>

export const requestUsers =
  (currentPage: number, pageSize: number): Thank =>
  async dispatch => {
    dispatch(setIsFetching())
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setIsFetching())
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  }

const followUnfollowFlow = async (
  dispatch: DispatchType,
  id: number,
  apiMethod: any,
  actionCreator: (id: number) => FollowSuccessType | UnfollowSuccessType
) => {
  dispatch(toggleFollowingProgress(true, id))
  const data = await apiMethod(id)
  if (data.resultCode === 0) {
    dispatch(actionCreator(id))
  }
  dispatch(toggleFollowingProgress(false, id))
}

export const follow =
  (id: number): Thank =>
  async dispatch => {
    followUnfollowFlow(dispatch, id, usersAPI.followApi.bind(id), followSuccess)
  }

export const unfollow =
  (id: number): Thank =>
  async dispatch => {
    followUnfollowFlow(
      dispatch,
      id,
      usersAPI.unfollowApi.bind(id),
      unfollowSuccess
    )
  }

export default userReducer
