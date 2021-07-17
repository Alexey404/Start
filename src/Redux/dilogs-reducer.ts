import { InferActionsTypes } from './redux-store'

type InitialStateType = typeof initialState

type DialogType = {
  id: number
  name: string
}
type MessagesType = {
  id: number
  message: string
}

const initialState = {
  dialogsData: [{ id: 1, name: 'Dimych' }] as Array<DialogType>,
  messages: [{ id: 1, message: 'Hi' }] as Array<MessagesType>,
}

const dialogsReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case 'SEND_MESSAGE': {
      console.log('robit')
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: action.body }],
      }
    }
    default:
      return state
  }
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  sendMessage: (body: string) => {
    return {
      type: 'SEND_MESSAGE',
      body,
    } as const
  },
}

export default dialogsReducer
