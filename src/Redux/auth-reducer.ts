import { ResultCode } from '../api/api'
import { ThunkAction } from 'redux-thunk'
import { AppStateType, InferActionsTypes } from './redux-store'
import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/auth-api'

type InitialStateType = typeof initialState

const initialState = {
  data: {
    email: null as string | null,
    id: null as number | null,
    login: null as string | null,
  },
  resultCode: '1' as string,
  isAuth: false as boolean,
  isFetchingAll: true as boolean,
  isFetchingLogin: false as boolean,
}

const authReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        data: action.payload,
        isAuth: action.isAuth,
      }
    case 'TOGLE_IS_FETCHING_ALL': {
      return { ...state, isFetchingAll: action.isFetchingAll }
    }
    case 'TOGLE_IS_FETCHING_LOGIN': {
      return { ...state, isFetchingLogin: action.isFetchingLog }
    }
    default:
      return state
  }
}

///--------AC---------
type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  setUserData: (
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
  ) => {
    return {
      type: 'SET_USER_DATA',
      payload: { id, email, login },
      isAuth,
    } as const
  },
  setIsFetchingAll: (isFetchingAll: boolean) => {
    return {
      type: 'TOGLE_IS_FETCHING_ALL',
      isFetchingAll,
    } as const
  },
  setIsFetchingLogin: (isFetchingLog: boolean) => {
    return {
      type: 'TOGLE_IS_FETCHING_LOGIN',
      isFetchingLog,
    } as const
  },
}

///-------Thunk---------
type Thank = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>

export const getAuth = (): Thank => async dispatch => {
  const meData = await authAPI.getAuthApi()
  const { id, login, email } = meData.data
  if (meData.resultCode === ResultCode.Sucsses) {
    dispatch(actions.setUserData(id, login, email, true))
  }
  dispatch(actions.setIsFetchingAll(false))
}

export const loginAuth =
  (email: string, password: string, rememberMe: boolean) =>
  async (dispatch: any) => {
    dispatch(actions.setIsFetchingLogin(true))
    const data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === ResultCode.Sucsses) {
      dispatch(getAuth())
    } else {
      dispatch(stopSubmit('login', { _error: 'Wrong login or password' }))
    }
    dispatch(actions.setIsFetchingLogin(false))
  }

export const Logout = (): Thank => async dispatch => {
  const response = await authAPI.logout()
  if (response.data.resultCode === ResultCode.Sucsses) {
    dispatch(actions.setUserData(null, null, null, false))
  }
}

export default authReducer
