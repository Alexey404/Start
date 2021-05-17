import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
  posts: [
    { message: 'Hi,how are you?', likesCount: '20' },
    { message: 'It`s my first post', likesCount: '125' },
  ],
  profile: {
    photos: { small: null, large: null },
    fullName: 'AnaTosh',
    lookingForAJob: false,
    aboutMe: null,
    contacts: {
      facebook: null,
      github: null,
      instagram: null,
      mainLink: null,
      twitter: null,
      vk: null,
      website: null,
      youtube: null,
    },
  },
  status: '',
}

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        message: action.text,
        likesCount: 0,
      }
      
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    default:
      return state
  }
}

///--------AC---------

export const addPost = text => {
  return {
    type: ADD_POST,
    text,
  }
}
export const setUserProfile = profile => {
  return {
    type: SET_USER_PROFILE,
    profile,
  }
}
export const setStatus = status => {
  return {
    type: SET_STATUS,
    status,
  }
}

///--------Thunk---------

export const getProfile = userId => dispatch => {
  profileAPI.getProfileApi(userId).then(response => {
    dispatch(setUserProfile(response.data))
  })
}

export const getStatus = userId => dispatch => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data))
  })
}
export const updateStatus = status => dispatch => {
  profileAPI.updateStatusApi(status).then(response => {
    if (response.data.resultCode === 0) {
      console.log(response.data.resultCode)
      dispatch(setStatus(status))
    }
  })
}

export default profileReducer
