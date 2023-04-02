import { useState } from "react";
import { FaBars, FaTimes, FaUtensils } from "react-icons/fa";
import styles from "./style.module.scss";

export default function Header() {
  const [navbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => setNavbarActive(!navbarActive);

  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <FaUtensils></FaUtensils>
        Food
      </a>

      <div className={styles.menuBar} onClick={toggleNavbar}>
        {navbarActive ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`${styles.navbar} ${navbarActive ? styles.active : ""}`}>
        <a href="#home" onClick={() => setNavbarActive(false)}>
          home
        </a>
        <a href="#speciality" onClick={() => setNavbarActive(false)}>
          speciality
        </a>
        <a href="#popular" onClick={() => setNavbarActive(false)}>
          popular
        </a>
        <a href="#gallery" onClick={() => setNavbarActive(false)}>
          gallery
        </a>
        <a href="#review" onClick={() => setNavbarActive(false)}>
          review
        </a>
        <a href="#order" onClick={() => setNavbarActive(false)}>
          order
        </a>
      </nav>
    </header>
  );
}
