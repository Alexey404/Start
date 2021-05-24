<<<<<<< HEAD:src/Components/common/Pagination/Pagination.js
=======
import React from 'react'
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1:src/Components/Pagination/Pagination.js
import style from './Pagination.module.scss'
import ReactPaginate from 'react-paginate'

let Pagination = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let onPage = p => {
    props.onPageChanged(p)
  }

  return (
    <div className={style.pagination}>
      <ReactPaginate
        pageCount={pagesCount}
        pageRangeDisplayed={6}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => {
          onPage(selected + 1)
        }}
        forcePage={props.currentPage - 1}
        activeLinkClassName={style.active}
        pageLinkClassName={style.nav__link}
        disabledClassName={style.nav__link}
        containerClassName={style.container}
        nextClassName={style.Of}
        previousClassName={style.Of}
        breakLinkClassName={style.nav__link}
        pageClassName={style.Li}
        breakClassName={style.Li}
      />
    </div>
  )
}

export default Pagination
