import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
<<<<<<< HEAD
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
=======
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1

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
<<<<<<< HEAD
  isFetchingProfile: false,
=======
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
}

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        message: action.text,
        likesCount: 0,
      }
<<<<<<< HEAD
=======
      
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
<<<<<<< HEAD
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
=======
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
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

<<<<<<< HEAD
export const addPost = (text) => {
=======
export const addPost = text => {
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  return {
    type: ADD_POST,
    text,
  }
}
<<<<<<< HEAD
export const setUserProfile = (profile) => {
=======
export const setUserProfile = profile => {
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  return {
    type: SET_USER_PROFILE,
    profile,
  }
}
<<<<<<< HEAD
export const setStatus = (status) => {
=======
export const setStatus = status => {
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  return {
    type: SET_STATUS,
    status,
  }
}
<<<<<<< HEAD
export const setIsFetching = () => {
  return {
    type: TOGLE_IS_FETCHING,
  }
}
export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  }
}

///--------Thunk---------

export const getProfile = (userId) => async (dispatch) => {
  dispatch(setIsFetching())
  let response = await profileAPI.getProfileApi(userId)
  dispatch(setUserProfile(response.data))
  dispatch(setIsFetching())
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}
export const savePhoto = (photo) => async (dispatch) => {
  let response = await profileAPI.savePhoto(photo)  
  dispatch(savePhotoSuccess(response.data.data.photos))
}
export const updateStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatusApi(status)
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  }
=======

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
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
}

export default profileReducer
