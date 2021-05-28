import style from './Pagination.module.scss'
import ReactPaginate from 'react-paginate'

type Props = {
  totalUsersCount: number
  pageSize: number
  setCurrentPageLocal: (p: number) => void
  currentPage: number
}

const Pagination: React.FC<Props> = ({
  totalUsersCount,
  pageSize,
  setCurrentPageLocal,
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
          setCurrentPageLocal(selected + 1)
        }}
        forcePage={currentPage - 1}
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
