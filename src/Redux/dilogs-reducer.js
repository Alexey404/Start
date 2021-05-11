const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogsData: [
    { id: "1", name: "Dimych" },
    { id: "2", name: "Andrey" },
    { id: "3", name: "Sveta" },
    { id: "4", name: "Sasha" },
    { id: "5", name: "Viktor" },
    { id: "6", name: "Valera" },
  ],
  messages: [
    { id: "1", message: "Hi" },
    { id: "2", message: "Yo" },
    { id: "3", message: "Hi" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: body }],
        newMessageBody: "",
      };
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
      default:
        return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
