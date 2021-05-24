import { authAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
  data: {
    id: null,
    login: null,
    email: null,
  },
  resultCode: '1',
  isAuth: false,
}

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}

///--------AC---------

export const setUserData = data => {
  return {
    type: SET_USER_DATA,
    data,
  }
}

///-------Thunk---------

export const getAuth = () => dispatch => {
  authAPI.getAuthApi().then(response => {
    let data = response.data
    dispatch(setUserData(data))
    console.log(data)
  })
}

export default authReducer
