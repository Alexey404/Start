import { profileAPI } from '../api/profile-api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

type InitialStateType = typeof initialState

export type PostsType = {
  message: string
  likesCount: number
}

export type Photos = {
  small: string | null
  large: string | null
}

type ContactsType = {
  facebook: null | string
  github: null | string
  instagram: null | string
  mainLink: null | string
  twitter: null | string
  vk: null | string
  website: null | string
  youtube: null | string
}

export type ProfileType = {
  photos: Photos
  fullName: string
  lookingForAJob: boolean
  aboutMe: null | string
  contacts: ContactsType
}

const initialState = {
  posts: [
    { message: 'Hi,how are you?', likesCount: 20 },
    { message: 'It`s my first post', likesCount: 125 },
  ] as Array<PostsType>,
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
  } as ProfileType,
  status: '' as string,
  isFetchingProfile: false as boolean,
}

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
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

type AddPostType = {
  type: typeof ADD_POST
  text: string
}

export const addPost = (text: string): AddPostType => {
  return {
    type: ADD_POST,
    text,
  }
}

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
  return {
    type: SET_USER_PROFILE,
    profile,
  }
}

type SetStatusType = {
  type: typeof SET_STATUS
  status: string
}

export const setStatus = (status: string): SetStatusType => {
  return {
    type: SET_STATUS,
    status,
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
type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: any
}
export const savePhotoSuccess = (photos: any): SavePhotoSuccessType => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  }
}

///--------Thunk---------

export const getProfile = (userId: number) => async (dispatch: any) => {
  dispatch(setIsFetching())
  const data = await profileAPI.getProfileApi(userId)
  dispatch(setUserProfile(data))
  dispatch(setIsFetching())
}

export const getStatus = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}
export const savePhoto = (photo: any) => async (dispatch: any) => {
  const data = await profileAPI.savePhoto(photo)
  dispatch(savePhotoSuccess(data.data))
}
export const updateStatus = (status: string) => async (dispatch: any) => {
  const data = await profileAPI.updateStatusApi(status)
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export default profileReducer
