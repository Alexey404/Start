import { Dispatch } from 'redux'
import { chatAPI, ChatMessege } from '../api/chat-api'

export type Status = 'pending' | 'ready' | 'error'

const initialState = {
  messages: [] as ChatMessege[],
  status: 'pending' as Status,
}

const chatReduser = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SN/CHAT/MESSAGES_RECEIVED':
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages],
      }
    case 'SN/CHAT/STATUS_CHANGED':
      return {
        ...state,
        status: action.payload.status,
      }
    default:
      return state
  }
}

export const actions = {
  messagesReceived: (messages: ChatMessege[]) =>
    ({
      type: 'SN/CHAT/MESSAGES_RECEIVED',
      payload: { messages },
    } as const),
  statusChanged: (status: Status) =>
    ({
      type: 'SN/CHAT/STATUS_CHANGED',
      payload: { status },
    } as const),
}
///--------Thunk---------

let _newMessegeHandler: ((messages: ChatMessege[]) => void) | null = null
let _newstatusChangedHandler: ((status: Status) => void) | null = null

const newMessegeHandler = (dispatch: Dispatch) => {
  if (_newMessegeHandler === null) {
    _newMessegeHandler = messages => {
      dispatch(actions.messagesReceived(messages))
    }
  }
  return _newMessegeHandler
}

const newstatusChanged = (dispatch: Dispatch) => {
  if (_newstatusChangedHandler === null) {
    _newstatusChangedHandler = status => {
      dispatch(actions.statusChanged(status))
    }
  } 
  return _newMessegeHandler
}

export const startMessagesListening = () => async (dispatch: any) => {
  chatAPI.start()
  chatAPI.subscribe('messeges-received', newMessegeHandler(dispatch))
  chatAPI.subscribe('status-changed', newstatusChanged(dispatch))
}
export const stoptMessagesListening = () => async (dispatch: any) => {
  chatAPI.stop()
  chatAPI.unsubscribe('messeges-received', newMessegeHandler(dispatch))
  chatAPI.unsubscribe('status-changed', newstatusChanged(dispatch))
}
export const sendMessage = (message: string) => async () => {
  chatAPI.sendMessage(message)
}

export default chatReduser  
