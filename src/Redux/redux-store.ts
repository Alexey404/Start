import { Action, applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk, { ThunkAction } from 'redux-thunk'
import appReducer from './app-reducer'
import authReducer from './auth-reducer'
import chatReduser from './chat-reduser'
import dialogsReducer from './dilogs-reducer'
import profileReducer from './profile-reducer'
import userReducer from './users-reducer'

const reducers = combineReducers({
  form: formReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  userPage: userReducer,
  auth: authReducer,
  app: appReducer,
  chat: chatReduser,
})

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

export type InferActionsTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U
}
  ? U
  : never

export type BaseThankType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>

const store = createStore(reducers, applyMiddleware(thunk))

export default store
