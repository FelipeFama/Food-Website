import React from "react";
import styles from "./style.module.scss";
import ButtonComponent from "../ButtonComponent";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="share">
        <ButtonComponent>facebook</ButtonComponent>
        <ButtonComponent>twitter</ButtonComponent>
        <ButtonComponent>instagram</ButtonComponent>
        <ButtonComponent>pinterest</ButtonComponent>
        <ButtonComponent>linkedin</ButtonComponent>
      </div>

      <h1 className="credit">
        created by <span> lipeh fama </span> | all rights reserved!
      </h1>
    </footer>
  );
}
