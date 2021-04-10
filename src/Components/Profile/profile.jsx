import React from "react";
import MyPosts from "./MyPosts/MyPost";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import style from "./profile.module.scss";

let Profile = (props) => {
  return (
    <div className={style.profile}>
      <div className={style.container}>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
