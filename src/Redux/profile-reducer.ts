import { profileAPI } from '../api/profile-api'
import { BaseThankType, InferActionsTypes } from './redux-store'

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
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case 'ADD-POST': {
      const newPost = {
        message: action.text,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case 'SET_STATUS': {
      return {
        ...state,
        status: action.status,
      }
    }
    case 'TOGLE_IS_FETCHING': {
      return { ...state, isFetchingProfile: !state.isFetchingProfile }
    }
    case 'SAVE_PHOTO_SUCCESS': {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      }
    }
    case 'SET_USER_PROFILE': {
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

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  addPost: (text: string) => {
    return {
      type: 'ADD-POST',
      text,
    } as const
  },
  setUserProfile: (profile: ProfileType) => {
    return {
      type: 'SET_USER_PROFILE',
      profile,
    } as const
  },
  setStatus: (status: string) => {
    return {
      type: 'SET_STATUS',
      status,
    } as const
  },
  setIsFetching: () => {
    return {
      type: 'TOGLE_IS_FETCHING',
    } as const
  },
  savePhotoSuccess: (photos: any) => {
    return {
      type: 'SAVE_PHOTO_SUCCESS',
      photos,
    } as const
  },
}

///--------Thunk---------
type Thank = BaseThankType<ActionsTypes>

export const getProfile =
  (userId: number): Thank =>
  async dispatch => {
    dispatch(actions.setIsFetching())
    const data = await profileAPI.getProfileApi(userId)
    dispatch(actions.setUserProfile(data))
    dispatch(actions.setIsFetching())
  }

export const getStatus =
  (userId: number): Thank =>
  async dispatch => {
    const data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
  }
export const savePhoto =
  (photo: File): Thank =>
  async dispatch => {
    const data = await profileAPI.savePhoto(photo)
    dispatch(actions.savePhotoSuccess(data.data))
  }
export const updateStatus =
  (status: string): Thank =>
  async dispatch => {
    const data = await profileAPI.updateStatusApi(status)
    if (data.resultCode === 0) {
      dispatch(actions.setStatus(status))
    }
  }

export default profileReducer
