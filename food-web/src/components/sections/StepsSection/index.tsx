import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity";
import { Steps as StepsComponent } from "@/types/sections/steps";

interface StepsProps {
  steps: StepsComponent[];
}

export default function StepsSection({ steps }: StepsProps) {
  return (
    <section className={styles.steps}>
      <h1 className={styles.heading}>
        how it <span>works</span>
      </h1>

      <div className={styles.stepsContainer}>
        {steps.map((item: StepsComponent) => (
          <article key={item._id} className={styles.box}>
            {item.image && (
              <Image
                className={styles.image}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                {...useNextSanityImage(client, item.image.asset._ref)}
                alt={item.image.alt}
                priority={false}
              />
            )}
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
