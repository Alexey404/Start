import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import News from "./Components/News/news";
import Music from "./Components/Music/music";
import Settings from "./Components/Settings/settings";
import DialogsContainer from "./Components/Dialogs/dialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainerUrl from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

function App(props) {
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
          <Route path="/news" render={News} />
          <Route path="/music" render={Music} />
          <Route path="/settings" render={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
