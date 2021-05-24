import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './auth-reducer'
import dialogsReducer from './dilogs-reducer'
import profileReducer from './profile-reducer'
import userReducer from './users-reducer'
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  userPage: userReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store
