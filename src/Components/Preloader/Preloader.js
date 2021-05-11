import React from "react";
import prealoader from "./../../assets/three-dots.svg";
import styles from "../Users/user.module.scss";

let Preloader = () => {
  return <img className={styles.prealoader} src={prealoader} />;
};

export default Preloader;
