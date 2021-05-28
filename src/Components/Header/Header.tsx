import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './header.module.scss'
import { ButtonHeaderName, DivNameActive } from './headerStyled'

type Props = {
  resultCode: string
  login: string | null
  id: number | null
  isAuth: boolean
  clickAll: boolean
  pageSize: number
  currentPage: number
  Logout: () => void
  getProfile: (id: number | null) => void
  getStatus: (id: number | null) => void
}

const Header: React.FC<Props> = props => {
  const [activProfile, setActivProfile] = useState(false)
  const [color, setColor] = useState('')
  const [activ, setActiv] = useState('')

  useEffect(() => {
    setColor(activProfile ? '' : 'black')
    setActiv(activProfile ? '' : 'a3a3a3')
  }, [activProfile])

  useEffect(() => {
    if (props.clickAll) {
      setActivProfile(props.clickAll)
    }
    if (!props.clickAll) {
      setActivProfile(!props.clickAll)
    }
  }, [props.clickAll])

  const OnClick = (e: any) => {
    e.stopPropagation()
    setActivProfile(!activProfile)
  }

  const OnClickHed = (e: any) => {
    OnClick(e)
    props.getProfile(props.id)
    props.getStatus(props.id)
  }

  return (
    <div className={style.header}>
      {props.isAuth ? (
        <div className={style.container}>
          <nav className={style.nav}>
            <NavLink
              className={style.nav__link}
              activeClassName={style.active}
              to={'/users/' + props.currentPage + '/' + props.pageSize}
            >
              Users
            </NavLink>
            <NavLink
              className={style.nav__link}
              activeClassName={style.active}
              to='/dialogs'
            >
              Messages
            </NavLink>
            <NavLink
              className={style.nav__link}
              activeClassName={style.active}
              to='/news'
            >
              News
            </NavLink>
            <NavLink
              className={style.nav__link}
              activeClassName={style.active}
              to='/music'
            >
              Music
            </NavLink>
            <div>
              <ButtonHeaderName onClick={OnClick} activ={activ} color={color}>
                {props.login}
              </ButtonHeaderName>
              {!activProfile ? (
                <DivNameActive onClick={(e: any) => e.stopPropagation()}>
                  <div>
                    <NavLink
                      onClick={OnClickHed}
                      className={style.Profile}
                      to={'/profile/' + props.id}
                    >
                      Profile
                    </NavLink>
                  </div>
                  <NavLink
                    onClick={OnClick}
                    className={style.Profile}
                    to='/settings'
                  >
                    Settings
                  </NavLink>
                  <div className={style.Profile} onClick={props.Logout}>
                    Logout
                  </div>
                </DivNameActive>
              ) : undefined}
            </div>
          </nav>
        </div>
      ) : undefined}
    </div>
  )
}

export default Header
