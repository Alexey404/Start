import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA'
const TOGLE_IS_FETCHING_LOGIN = 'TOGLE_IS_FETCHING_LOGIN'
const TOGLE_IS_FETCHING_ALL = 'TOGLE_IS_FETCHING_ALL'

type InitialStateType = {
  data: { email: string | null; id: number | null; login: string | null }
  resultCode: string
  isAuth: boolean
  isFetchingAll: boolean
  isFetchingLogin: boolean
}
let initialState: InitialStateType = {
  data: { email: null, id: 20, login: null },
  resultCode: '1',
  isAuth: false,
  isFetchingAll: true,
  isFetchingLogin: false,
}

let authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        data: action.payload,
        isAuth: action.isAuth,
      }
    case TOGLE_IS_FETCHING_ALL: {
      return { ...state, isFetchingAll: action.isFetchingAll }
    }
    case TOGLE_IS_FETCHING_LOGIN: {
      return { ...state, isFetchingLogin: action.isFetchingLog }
    }
    default:
      return state
  }
}

///--------AC---------

type ACPayloadType = {
  id: number | null
  email: string | null
  login: string | null
}

type SetUserDataACType = {
  type: typeof SET_USER_DATA
  payload: ACPayloadType
  isAuth: boolean
}

export const setUserData = (
  id: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean
): SetUserDataACType => {
  return {
    type: SET_USER_DATA,
    payload: { id, email, login },
    isAuth,
  }
}
type setIsFetchingAllACType = {
  type: typeof TOGLE_IS_FETCHING_ALL
  isFetchingAll: boolean
}

export const setIsFetchingAll = (
  isFetchingAll: boolean
): setIsFetchingAllACType => {
  return {
    type: TOGLE_IS_FETCHING_ALL,
    isFetchingAll,
  }
}

type setIsFetchingLoginCType = {
  type: typeof TOGLE_IS_FETCHING_LOGIN
  isFetchingLog: boolean
}

export const setIsFetchingLogin = (
  isFetchingLog: boolean
): setIsFetchingLoginCType => {
  return {
    type: TOGLE_IS_FETCHING_LOGIN,
    isFetchingLog,
  }
}

///-------Thunk---------

export const getAuth = () => async (dispatch: any) => {
  let response = await authAPI.getAuthApi()
  let { id, login, email } = response.data.data
  if (response.data.resultCode === 0) {
    dispatch(setUserData(id, login, email, true))
  }
  dispatch(setIsFetchingAll(false))
}

export const loginAuth =
  (email: string, password: string | number, rememberMe: boolean) =>
  async (dispatch: any) => {
    dispatch(setIsFetchingLogin(true))
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
      dispatch(getAuth())
      console.log('Robit login')
    } else {
      dispatch(stopSubmit('login', { _error: 'Wrong login or password' }))
    }
    dispatch(setIsFetchingLogin(false))
  }

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}

export default authReducer
