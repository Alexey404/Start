<<<<<<< HEAD
import React, { useEffect } from 'react'
import './App.css'
import { Route, Switch, withRouter } from 'react-router-dom'
import HeaderContainer from './Components/Header/HeaderContainer'
import { getAuth } from './Redux/auth-reducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Preloader from './Components/common/Preloader/Preloader'
import withSuspense from './hoc/withAuthSuspense'
import MusicContiner from './Components/Music/MusicContiner'
import NewsContainer from './Components/News/NewsContainer'
import SettingsContainer from './Components/Settings/SettingsContainer'
import { OnClickAll } from './Redux/app-reducer'

const DialogsContainer = React.lazy(() =>
  import('./Components/Dialogs/dialogsContainer')
)
const UsersContainer = React.lazy(() =>
  import('./Components/Users/UsersContainer')
)
const ProfileContainerUrl = React.lazy(() =>
  import('./Components/Profile/ProfileContainer')
)
const Login = React.lazy(() => import('./Components/Login/Login'))

const App = ({ OnClickAll, isFetchingAll, getAuth }) => {
  useEffect(() => {
    getAuth()
  }, [])

  return (
    <div className='all' onClick={OnClickAll}>
      {isFetchingAll ? (
        <Preloader />
      ) : (
        <div>
          <HeaderContainer />
          <div className='container'>
            <Switch>
              <Route
                path='/profile/:userId?'
                render={withSuspense(ProfileContainerUrl)}
              />
              <Route exact path='/' render={withSuspense(Login)} />
              <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
              <Route path='/users' render={withSuspense(UsersContainer)} />
              <Route path='/news' render={() => <NewsContainer />} />
              <Route path='/music' render={() => <MusicContiner />} />
              <Route path='/settings' render={() => <SettingsContainer />} />
              <Route path='*' render={() => <div>404 Not definde</div>} />
            </Switch>
          </div>
=======
import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import ProfileContainerUrl from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/dialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import Settings from "./Components/Settings/settings";
import Music from "./Components/Music/music";
import Login from "./Components/Login/Login";
import News from "./Components/News/news";

function App() {
  return (
    <BrowserRouter>
      <div className="all">
        <HeaderContainer />
        <div className="container">
          <Route
            path="/profile/:userId?"
            render={() => <ProfileContainerUrl />}
          />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/news" render={News} />
          <Route path="/music" render={Music} />
          <Route path="/settings" render={Settings} />
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
        </div>
      )}
    </div>
  )
}
const mapStateToProps = state => ({
  isFetchingAll: state.auth.isFetchingAll,
})

export default compose(
  connect(mapStateToProps, { getAuth, OnClickAll }),
  withRouter
)(App)
