import React from "react";
import style from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

let Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let onPage = (p) => {
    props.onPageChanged(p);
  };

  return (
    <div className={style.pagination}>
      <ReactPaginate
        pageCount={pagesCount}
        pageRangeDisplayed={6}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => {
          onPage(selected + 1);
        }}
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
  );
};

export default Pagination;
