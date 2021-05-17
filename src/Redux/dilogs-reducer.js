const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
  dialogsData: [
    { id: '1', name: 'Dimych' },
    { id: '2', name: 'Andrey' },
    { id: '3', name: 'Sveta' },
    { id: '4', name: 'Sasha' },
    { id: '5', name: 'Viktor' },
    { id: '6', name: 'Valera' },
  ],
  messages: [
    { id: '1', message: 'Hi' },
    { id: '2', message: 'Yo' },
    { id: '3', message: 'Hi' },
  ],
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: action.body }],
      }
    }
    default:
      return state
  }
}

export const sendMessage = body => {
  return {
    type: SEND_MESSAGE,
    body,
  }
}

export default dialogsReducer
