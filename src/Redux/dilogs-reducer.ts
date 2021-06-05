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
  dialogsData: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Yo' },
    { id: 3, message: 'Hi' },
  ] as Array<MessagesType>,
}

const dialogsReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case 'SEND_MESSAGE': {
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
    }as const
  },
}

export default dialogsReducer
