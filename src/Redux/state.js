import dialogsReducer from "./dilogs-reducer";
import profileReducer from "./profile-reducer";



let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hi,how are you?", likesCount: "10" },
        { id: "2", message: "It`s my first post", likesCount: "15" },
      ],
      newPostText: "Hi",
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("Hi");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
