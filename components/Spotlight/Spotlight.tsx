import React, { FunctionComponent } from "react";
import styles from "./style.module.css";

interface SpotlightProps {
  children: React.ReactNode;
}

const Spotlight: FunctionComponent<SpotlightProps> = ({ children }) => {
  return (
    <button className={styles.bt}>
      <div className={styles.lightHolder}>
        <div className={styles.dot}></div>
        <div className={styles.light}></div>
      </div>
      {/* <div className={styles.main}> */}
      {children}
      {/* </div> */}
    </button>
  );
};

export default Spotlight;
