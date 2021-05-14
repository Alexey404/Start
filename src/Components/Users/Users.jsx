import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./user.module.scss";

let Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={styles.item}>
          <div>
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
          </div>
          <div>
            <div className={styles.userNameCont}>
              <div className={styles.userName}>{u.name}</div>
              <div className={styles.userStatus}>{u.status}</div>
            </div>
            <div>
              {u.followed ? (
                <button className={styles.userFollow}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button className={styles.userFollow}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
