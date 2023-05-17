import React from "react";
import styles from "./style.module.scss";
import ButtonComponent from "../../buttons/ButtonSections";

interface FooterProps {
  footer: Footer[];
}

interface Footer {
  _id: string;
  span: string;
}

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.share}>
        {footer.map((item: Footer) => (
          <ButtonComponent key={item._id}>{item.span}</ButtonComponent>
        ))}
      </div>

      <h1 className={styles.credit}>
        created by <span> lipeh fama </span> | all rights reserved!
      </h1>
    </footer>
  );
}
