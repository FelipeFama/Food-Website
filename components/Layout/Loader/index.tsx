import React, { useEffect } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import loaderGif from "../../../assets/loader.gif";

const loaderGifImage = {
  source: loaderGif,
  alt: "loader",
};

export default function Loader() {
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
      <Image
        src={loaderGifImage.source}
        alt={loaderGifImage.alt}
        width={200}
        height={200}
      />
    </figure>
  );
}
