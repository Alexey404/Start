import React from "react";
import prealoader from "./../../assets/three-dots.svg";
import styles from "../Users/user.module.scss";

let Preloader = () => {
  return (
    <div className={styles.prealoaderCont}>
      <img className={styles.prealoader} src={prealoader} />
    </div>
  );
};

export default Preloader;
