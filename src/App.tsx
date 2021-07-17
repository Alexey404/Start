import { Layout } from 'antd'
import 'antd/dist/antd.css'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Preloader from './Components/common/Preloader/Preloader'
import HEader from './Components/Header/Header'
import MusicContiner from './Components/Music/MusicContiner'
import { Navbar } from './Components/Navbar/Navbar'
import NewsContainer from './Components/News/NewsContainer'
import SettingsContainer from './Components/Settings/SettingsContainer'
import withSuspense from './hoc/withAuthSuspense'
import { getAuth } from './Redux/auth-reducer'
import { AppStateType } from './Redux/redux-store'

const { Header, Content, Footer, Sider } = Layout

const DialogsContainer = React.lazy(
  () => import('./Components/Dialogs/dialogsContainer')
)
const UsersContainer = React.lazy(
  () => import('./Components/Users/UsersContainer')
)
const ProfileContainerUrl = React.lazy(
  () => import('./Components/Profile/ProfileContainer')
)
const Login = React.lazy(() => import('./Components/Login/Login'))
const Chat = React.lazy(() => import('./pages/chat/chatPage'))

const SuspendedProfile = withSuspense(ProfileContainerUrl)
const SuspendedLogin = withSuspense(Login)
const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedUsers = withSuspense(UsersContainer)
const SuspendedChat = withSuspense(Chat)

const App: FC = () => {
  const { isFetchingAll, isAuth } = useSelector(
    (state: AppStateType) => state.auth
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAuth())
  }, [isFetchingAll])

  return (
    <>
      {isFetchingAll ? (
        <Preloader />
      ) : (
        <Layout>
          <Header className="header">
            <HEader />
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Layout
              className="site-layout-background"
              style={{ padding: '24px 0' }}
            >
              {!isAuth ? (
                ''
              ) : (
                <Sider className="site-layout-background" width={150}>
                  <Navbar />
                </Sider>
              )}
              <Content style={{ padding: '0 24px', minHeight: 750 }}>
                <div>
                  <div className="containАer">
                    <Switch>
                      <Route
                        path="/profile"
                        render={() => <SuspendedProfile />}
                      />
                      <Route exact path="/" render={() => <SuspendedLogin />} />
                      <Route
                        path="/dialogs"
                        render={() => <SuspendedDialogs />}
                      />
                      <Route path="/users" render={() => <SuspendedUsers />} />
                      <Route path="/news" render={() => <NewsContainer />} />
                      <Route path="/music" render={() => <MusicContiner />} />
                      <Route path="/chat" render={() => <SuspendedChat />} />
                      <Route
                        path="/settings"
                        render={() => <SettingsContainer />}
                      />
                      <Route
                        path="*"
                        render={() => <div>404 Not definde</div>}
                      />
                    </Switch>
                  </div>
                </div>
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      )}
    </>
  )
}
export default React.memo(App)
