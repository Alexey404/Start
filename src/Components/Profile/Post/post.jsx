import React from "react";
import style from "../profile.module.scss";

let Post = (props) => {
  return (
    <div className={style.item}>
    {props.message}
    <br/>
      <span>Like:{props.likesCount}</span>
    </div>
  );
};

export default Post;
