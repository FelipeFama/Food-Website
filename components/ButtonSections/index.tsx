import React from "react";
import styles from "./style.module.scss";

interface Props {
  children: String;
}

export default function ButtonSections({ children }: Props) {
  return (
    <>
      <button type="submit" className={styles.btn}>
        {children}
      </button>
    </>
  );
}
