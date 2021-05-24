import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './auth-reducer'
import dialogsReducer from './dilogs-reducer'
import profileReducer from './profile-reducer'
import userReducer from './users-reducer'
import { reducer as formReducer } from 'redux-form'
<<<<<<< HEAD
import appReducer from './app-reducer'
=======
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  userPage: userReducer,
  auth: authReducer,
  form: formReducer,
<<<<<<< HEAD
  app: appReducer,
=======
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store
