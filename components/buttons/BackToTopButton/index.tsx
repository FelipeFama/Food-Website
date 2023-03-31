import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { FaChevronUp } from "react-icons/fa";

export default function BackToTopButton() {
  const scrollTopButtonRef = useRef<HTMLAnchorElement>(null);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const scrollTopButton = scrollTopButtonRef.current;

    window.onscroll = () => {
      if (scrollTopButton) {
        if (window.scrollY > 60) {
          scrollTopButton.classList.add("active");
        } else {
          scrollTopButton.classList.remove("active");
        }
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, [scrollTopButtonRef]);

  return (
    <>
      <a href="#" className={styles.scrollTop} onClick={handleScrollTop}>
        <FaChevronUp />
      </a>
    </>
  );
}
