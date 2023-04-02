import React, { useEffect, useRef } from "react";
import { FaAngleUp } from "react-icons/fa";
import styles from "./style.module.scss";

export default function BackToTopButton() {
  const scrollTopButtonRef = useRef<HTMLAnchorElement>(null);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollTopButton = scrollTopButtonRef.current;

    window.onscroll = () => {
      if (scrollTopButton) {
        if (window.scrollY > 60) {
          scrollTopButton.classList.add(styles.active);
        } else {
          scrollTopButton.classList.remove(styles.active);
        }
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, [scrollTopButtonRef]);

  return (
    <>
      <a
        href="#home"
        className={`${styles["scrollTop"]}`}
        ref={scrollTopButtonRef}
        onClick={handleScrollTop}
      >
        <FaAngleUp />
      </a>
    </>
  );
}
