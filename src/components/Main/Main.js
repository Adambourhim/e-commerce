import React from "react";
import styles from "./main.module.css";
import f1 from "./f1.jpeg";
export default function Main() {
  return (
    <div>
      <div className={styles.firstbox}>
        <p className={styles.dis}>
          Find things you'll love. Support independent sellers. Only on Etsy.
        </p>
      </div>
      <div className={styles.slidemenu}>
        <div>
          <img className={styles.f1} src={f1} alt="f1" />
        </div>
        <div>
          <img className={styles.f1} src={f1} alt="f1" />
        </div>
        <div>
          <img className={styles.f1} src={f1} alt="f1" />
        </div>
        <div>
          <img className={styles.f1} src={f1} alt="f1" />
        </div>
        <div>
          <img className={styles.f1} src={f1} alt="f1" />
        </div>
      </div>
    </div>
  );
}
