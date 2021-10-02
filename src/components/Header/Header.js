import React from "react";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={styles.global}>
      <div className={styles.header}>
        <div className={styles.logo}>Free Bird</div>
        <div className={styles.input}>
          <input
            className={styles.searchbar}
            placeholder="Search for anything"
          />
        </div>
        <div className={styles.leftbar}>
          <div className={styles.signbox}>Sign in</div>
          <div className={styles.iconbox}>icon</div>
        </div>
      </div>
      <div className={styles.secondMenu}>
        <div>
          <ul>
            <li>Home</li>
            <li>Gatalog</li>
            <li>Braclets</li>
            <li>Rings</li>
            <li>Neckaces</li>
            <li>Freedom Collection</li>
            <li>Hope Collection</li>
            <li>Live Collection</li>
            <li>Love Collection</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
