import { Col, Row } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logout } from '../../Redux/auth-reducer'
import { AppStateType } from '../../Redux/redux-store'

const HEader: React.FC = () => {
  const { isAuth } = useSelector((state: AppStateType) => state.auth)
  const dispatch = useDispatch()

  const LogOut = () => {
    dispatch(Logout())
  }

  return (
    <Row>
      <Col span={20}>
        <div className='logo' />
        <Link to='/news'>logo</Link>
      </Col>
      {!isAuth ? (
        ''
      ) : (
        <Col span={1}>
          <span onClick={LogOut} style={{ color: 'white', cursor: 'pointer' }}>
            Logout
          </span>
        </Col>
      )}
    </Row>
  )
}

export default HEader
