import React from 'react'
import ReactPaginate from 'react-paginate'
import style from './Pagination.module.scss'

const Pagination = ({ pagesCount, setCurrentPage, currentPage }) => {

  return (
    <div className={style.pagination}>
      <ReactPaginate
        pageCount={pagesCount}
        pageRangeDisplayed={6}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => {
          setCurrentPage(selected + 1)
        }}
        forcePage={currentPage - 1 || 0}
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

export default React.memo(Pagination)
