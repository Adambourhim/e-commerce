import React from "react";
import styles from "./main.module.css";
import f1 from "./f1.jpeg";
import f2 from "./f2.jpeg";
import f3 from "./f3.png";
import f4 from "./f4.png";
import f5 from "./f5.png";
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
          <img className={styles.f1} src={f2} alt="f1" />
        </div>
        <div>
          <img className={styles.f1} src={f3} alt="f1" />
        </div>
        <div>
          <img className={styles.f1} src={f4} alt="f1" />
        </div>
        <div>
          <img className={styles.f1} src={f5} alt="f1" />
        </div>
      </div>
    </div>
  );
}
