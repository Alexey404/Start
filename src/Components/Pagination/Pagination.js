import React, { useEffect, useState } from "react";
import style from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

let Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const page = pagesCount;
  const numberOfPages = [];

  for (let i = 1; i <= page; i++) {
    numberOfPages.push(i);
  }

  return (
    <div ClassName={style.container}>
      <ReactPaginate
        pagesCount={40}
        pageRangeDisplayed={2}
        marginPagesDisplayed={4}
        activeClassName={style.active}
        pageClassName={style.nav__link}
        previousLinkClassName={style.nav__link}
        nextLinkClassName={style.nav__link}
        containerClassName={style.plagination}
      />
    </div>
  );
};

export default Pagination;
