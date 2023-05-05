import React from "react";
import styles from "./style.module.scss";
import ButtonComponent from "../../buttons/ButtonSections";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.share}>
        <ButtonComponent>facebook</ButtonComponent>
        <ButtonComponent>twitter</ButtonComponent>
        <ButtonComponent>instagram</ButtonComponent>
        <ButtonComponent>pinterest</ButtonComponent>
        <ButtonComponent>linkedin</ButtonComponent>
      </div>

      <h1 className={styles.credit}>
        created by <span> lipeh fama </span> | all rights reserved!
      </h1>
    </footer>
  );
}
