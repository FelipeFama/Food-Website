import React, { useEffect } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity";
import { Loader as LoaderComponent } from "@/types/layout/loader";


interface LoaderProps {
  loader: LoaderComponent[];
}

export default function Loader({ loader }: LoaderProps) {

  const item = loader[0]

  useEffect(() => {
    const loaderContainer = document.querySelector(
      `.${styles["loaderContainer"]}`
    );
    const fadeOutInterval = setInterval(() => {
      if (loaderContainer) {
        loaderContainer.classList.add(styles["fadeOut"]);
        clearInterval(fadeOutInterval);
      }
    }, 3000);

    return () => clearInterval(fadeOutInterval);
  }, []);

  return (
    <figure className={styles["loaderContainer"]}>
      {item.image && (
        <Image
          className={styles.image}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          {...useNextSanityImage(client, item.image.asset._ref)}
          alt={item.image.alt}
          width={200}
          height={200}
          priority={false}
        />
      )}
    </figure>
  );
}
