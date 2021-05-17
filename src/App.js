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
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
