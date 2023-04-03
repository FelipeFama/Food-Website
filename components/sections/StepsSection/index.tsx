import React from "react";
import Image from "next/image";
import { stepImages } from "@/data/steps";
import styles from "./style.module.scss";

export default function StepsSection() {
  return (
    <section className={styles.steps}>
      <h1 className={styles.heading}>
        how it <span>works</span>
      </h1>

      <div className={styles.stepsContainer}>
        <article className={styles.box}>
          <Image
            src={stepImages.foodSteepImage.source}
            alt={stepImages.foodSteepImage.alt}
          />
          <h3>choose your favorite food</h3>
        </article>

        <article className={styles.box}>
          <Image
            src={stepImages.deliverySteepImage.source}
            alt={stepImages.deliverySteepImage.alt}
          />
          <h3>free and fast delivery</h3>
        </article>

        <article className={styles.box}>
          <Image
            src={stepImages.paymentsSteepImage.source}
            alt={stepImages.paymentsSteepImage.alt}
          />
          <h3>easy payments methods</h3>
        </article>

        <article className={styles.box}>
          <Image
            src={stepImages.finallySteepImage.source}
            alt={stepImages.finallySteepImage.alt}
          />
          <h3>and finally, enjoy your food</h3>
        </article>
      </div>
    </section>
  );
}
