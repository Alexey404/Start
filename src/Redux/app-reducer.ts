const ON_CLICK_MODAL = 'ON_CLICK_MODAL'

type InitialStateType = {
  clickAll: boolean
}
const initialState: InitialStateType = {
  clickAll: false,
}

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ON_CLICK_MODAL: {
      return { ...state, clickAll: !state.clickAll }
    }
    default:
      return state
  }
}

///--------AC---------

type OnClickAllACType = {
  type: typeof ON_CLICK_MODAL
}

export const OnClickAll = (): OnClickAllACType => {
  return {
    type: ON_CLICK_MODAL,
  }
}

///-------Thunk---------

export default appReducer
