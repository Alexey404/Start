import React, { ComponentType, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import {
  BooleanParam,
  NumberParam,
  StringParam,
  useQueryParams,
} from 'use-query-params'
import withAuthRedirect, { WithAuthRedirect } from '../../hoc/withAuthRedirect'
import { AppStateType } from '../../Redux/redux-store'
import { requestUsers } from '../../Redux/users-reducer'
import Pagination from '../common/Pagination/Pagination'
import styles from './user.module.scss'
import Users from './Users'
import UsersSearchForm from './UsersSearch'

const UseQueryParamsExample = () => {
  const [query, setQuerys] = useQueryParams({
    term: StringParam,
    friends: StringParam,
    СurrentPage: NumberParam,
  })
  const { СurrentPage, term, friends } = query

  const { pageSize, totalUsersCount } = useSelector(
    (state: AppStateType) => state.userPage
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_PAGE', currentPage: СurrentPage })
  }, [СurrentPage])

  useEffect(() => {
    dispatch(requestUsers(СurrentPage || 1, 10, term, friends))
  }, [СurrentPage, term, friends])

  const setCurrentPage = (num: number) => {
    setQuerys({ СurrentPage: num })
  }
  const setFormick = (value: any) => {
    setQuerys({ friends: value.friends === '' ? undefined : value.friends })

    setQuerys({ term: value.term === '' ? undefined : value.term })

    setQuerys({ СurrentPage: 1 })
  }

  return (
    <div>
      <UsersSearchForm onClickTerm={setFormick} />
      <Pagination
        setCurrentPage={setCurrentPage}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={СurrentPage}
      />
      <div className={styles.container}>
        <div className={styles.containerUsers}>
          <Users />
        </div>
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={СurrentPage}
      />
    </div>
  )
}

const UsersContainer = React.memo(
  compose<ComponentType>(WithAuthRedirect, withRouter)(UseQueryParamsExample)
)

export default UsersContainer
