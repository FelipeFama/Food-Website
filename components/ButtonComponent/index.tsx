import React from "react";
import styles from "./style.module.scss";

interface Props {
  children: String;
}

export default function ButtonComponent({ children, ...props }: Props) {
  return (
    <>
      <button type="submit" className={styles.btn} {...props}>
        {children}
      </button>
    </>
  );
}
