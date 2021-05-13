import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./user.module.scss";

let Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : "https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png"
                  }
                  alt=""
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
