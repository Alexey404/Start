import style from './Pagination.module.scss'
import ReactPaginate from 'react-paginate'

const Pagination = ({
  totalUsersCount,
  pageSize,
  setCurrentPage,
  currentPage,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize)

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

export default Pagination
