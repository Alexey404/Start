import { Dispatch } from 'react'
import { usersAPI } from '../api/user-api'
import { updateObjectInArray } from '../utils/object-helpers'
import { BaseThankType, InferActionsTypes } from './redux-store'

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
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
        }),
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
        }),
      }
    case 'SET_USERS': {
      return { ...state, users: action.users }
    }
    case 'TOGLE_IS_FETCHING': {
      return { ...state, isFetching: !state.isFetching }
    }
    case 'SET_TOTAL_USERS_COUNT': {
      return { ...state, totalUsersCount: action.count }
    }
    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage }
    }
    case 'TOGLE_IS_FOLLOWING_PROGRESS': {
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

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  followSuccess: (userId: number) => {
    return {
      type: 'FOLLOW',
      userId,
    } as const
  },
  unfollowSuccess: (userId: number) => {
    return {
      type: 'UNFOLLOW',
      userId,
    } as const
  },
  setCurrentPage: (currentPage: number) => {
    return {
      type: 'SET_CURRENT_PAGE',
      currentPage,
    } as const
  },
  setUsers: (users: any) => {
    return {
      type: 'SET_USERS',
      users,
    } as const
  },
  setIsFetching: () => {
    return {
      type: 'TOGLE_IS_FETCHING',
    } as const
  },
  setTotalUsersCount: (count: number) => {
    return {
      type: 'SET_TOTAL_USERS_COUNT',
      count,
    } as const
  },
  toggleFollowingProgress: (isFetching: boolean, userId: number) => {
    return {
      type: 'TOGLE_IS_FOLLOWING_PROGRESS',
      isFetching,
      userId,
    } as const
  },
}

///--------Thunk---------
type DispatchType = Dispatch<ActionsTypes>
type Thank = BaseThankType<ActionsTypes>

export const requestUsers =
  (
    currentPage: number | null | undefined,
    pageSize: number,
    term: string | null | undefined,
    Friends: string | null | undefined
  ): Thank =>
  async dispatch => {
    dispatch(actions.setIsFetching())
    const data = await usersAPI.getUsers(currentPage, pageSize, term, Friends)
    dispatch(actions.setIsFetching())
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))
  }

const followUnfollowFlow = async (
  dispatch: DispatchType,
  id: number,
  apiMethod: any,
  actionCreator: (id: number) => ActionsTypes
) => {
  dispatch(actions.toggleFollowingProgress(true, id))
  const data = await apiMethod(id)
  if (data.resultCode === 0) {
    dispatch(actionCreator(id))
  }
  dispatch(actions.toggleFollowingProgress(false, id))
}

export const follow =
  (id: number): Thank =>
  async dispatch => {
    followUnfollowFlow(
      dispatch,
      id,
      usersAPI.followApi.bind(id),
      actions.followSuccess
    )
  }

export const unfollow =
  (id: number): Thank =>
  async dispatch => {
    followUnfollowFlow(
      dispatch,
      id,
      usersAPI.unfollowApi.bind(id),
      actions.unfollowSuccess
    )
  }

export default userReducer
