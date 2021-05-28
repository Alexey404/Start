import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './auth-reducer'
import dialogsReducer from './dilogs-reducer'
import profileReducer from './profile-reducer'
import userReducer from './users-reducer'
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer'

const reducers = combineReducers({
  form: formReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  userPage: userReducer,
  auth: authReducer,
  app: appReducer,
})

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

type Properties<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> =
  ReturnType<Properties<T>>

const store = createStore(reducers, applyMiddleware(thunk))

export default store
