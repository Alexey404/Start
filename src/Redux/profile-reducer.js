import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

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

  isFetchingProfile: false,
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
    case TOGLE_IS_FETCHING: {
      return { ...state, isFetchingProfile: !state.isFetchingProfile }
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
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

export const setIsFetching = () => {
  return {
    type: TOGLE_IS_FETCHING,
  }
}
export const savePhotoSuccess = photos => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  }
}

///--------Thunk---------

export const getProfile = userId => async dispatch => {
  dispatch(setIsFetching())
  let response = await profileAPI.getProfileApi(userId)
  dispatch(setUserProfile(response.data))
  dispatch(setIsFetching())
}

export const getStatus = userId => async dispatch => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}
export const savePhoto = photo => async dispatch => {
  let response = await profileAPI.savePhoto(photo)
  dispatch(savePhotoSuccess(response.data.data.photos))
}
export const updateStatus = status => async dispatch => {
  let data = await profileAPI.updateStatusApi(status)
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export default profileReducer
