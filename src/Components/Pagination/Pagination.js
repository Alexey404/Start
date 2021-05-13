import React, { useEffect, useState } from "react";
import style from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

let Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let onPage = (p) => {
    props.onPageChanged(p);
    console.log(props.currentPage);
  };

  return (
    <div ClassName={style.container}>
      <ReactPaginate
        pageCount={pagesCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        
        onPageChange={({ selected }) => {
          onPage(selected + 1);
        }}
        activeClassName={style.active}
        pageClassName={style.nav__link}
        disabledClassName={style.nav__link}
        containerClassName={style.plagination}
      />
    </div>
  );
};

export default Pagination;
