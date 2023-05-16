import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity";

interface StepsProps {
  steps: Steps[];
}

interface Steps {
  _id: string;
  title: string;
  image: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
}

export default function StepsSection({ steps }: StepsProps) {
  return (
    <section className={styles.steps}>
      <h1 className={styles.heading}>
        how it <span>works</span>
      </h1>

      <div className={styles.stepsContainer}>
        {steps.map((item: Steps) => (
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
