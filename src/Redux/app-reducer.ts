import { InferActionsTypes } from './redux-store'

const initialState = {
  clickAll: false,
}

export type InitialStateType = typeof initialState

const appReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case 'ON_CLICK_MODAL': {
      return { ...state, clickAll: !state.clickAll }
    }
    default:
      return state
  }
}

///--------AC---------

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  OnClickAll: () => {
    return {
      type: 'ON_CLICK_MODAL',
    } as const
  },
}

///-------Thunk---------

export default appReducer
