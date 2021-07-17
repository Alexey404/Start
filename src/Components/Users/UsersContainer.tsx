import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NumberParam, StringParam, useQueryParams } from 'use-query-params'
import { AppStateType } from '../../Redux/redux-store'
import { requestUsers } from '../../Redux/users-reducer'
import Pagination from '../common/Pagination/Pagination'
import styles from './user.module.scss'
import Users from './Users'
import { UsersSearchForm } from './UsersSearch'

const UseQueryParamsExample = () => {
  const { pageSize, totalUsersCount } = useSelector(
    (state: AppStateType) => state.userPage
  )

  const [pagesCount, setPagesCount] = useState(0)

  const [query, setQuerys] = useQueryParams({
    term: StringParam,
    friends: StringParam,
    СurrentPage: NumberParam,
  })
  const { СurrentPage, term, friends } = query

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

  const setFormick = useCallback((value: any) => {
    setQuerys({ friends: value.friends === '' ? undefined : value.friends })
    setQuerys({ term: value.term === '' ? undefined : value.term })
    setQuerys({ СurrentPage: 1 })
  }, [])

  useEffect(() => {
    setPagesCount(Math.ceil(totalUsersCount / pageSize))
  }, [totalUsersCount, pageSize])

  return (
    <div>
      <UsersSearchForm onClickTerm={setFormick} />
      <Pagination
        setCurrentPage={setCurrentPage}
        pagesCount={pagesCount}
        currentPage={СurrentPage}
      />
      <div className={styles.container}>
        <div className={styles.containerUsers}>
          <Users />
        </div>
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        pagesCount={pagesCount}
        currentPage={СurrentPage}
      />
    </div>
  )
}

const UsersContainer = React.memo(UseQueryParamsExample)

export default UsersContainer
