import { useState } from "react";
import { FaBars, FaTimes, FaUtensils } from "react-icons/fa";
import styles from "./style.module.scss";

interface HeaderProps {
  header: Header[];
}

interface Header {
  _id: string;
  link: string;
  span: string;
}

export default function Header({ header }: HeaderProps) {
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
        {header.map((item: Header) => (
          <a key={item._id} href={item.link} onClick={() => setNavbarActive(false)}>{item.span}</a>
        ))}
      </nav>
    </header>
  );
}
