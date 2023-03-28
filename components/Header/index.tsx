import { FaUtensils } from "react-icons/fa";

import styles from "./style.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <FaUtensils></FaUtensils>
        Food
      </a>
      <nav className={styles.navbar}>
        <a href="#home">home</a>
        <a href="#speciality">speciality</a>
        <a href="#popular">popular</a>
        <a href="#gallery">gallery</a>
        <a href="#review">review</a>
        <a href="#order">order</a>
      </nav>
    </header>
  );
}
