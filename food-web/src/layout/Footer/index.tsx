import React from "react";
import styles from "./style.module.scss";
import { Footer as FooterComponent } from "@/types/layout/footer";
import ButtonSections from "@/components/buttons/ButtonSections";

interface FooterProps {
  footer: FooterComponent[];
}

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.share}>
        {footer.map((item: FooterComponent) => (
          <ButtonSections key={item._id}>{item.span}</ButtonSections>
        ))}
      </div>

      <h1 className={styles.credit}>
        created by <span> lipeh fama </span> | all rights reserved!
      </h1>
    </footer>
  );
}
