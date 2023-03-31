import React from "react";
import styles from "./style.module.scss";

export default function ButtonComponent() {
  return (
    <>
      <button type="submit" className={styles.btn}>
        order now
      </button>
    </>
  );
}
