import { useState } from "react";
import { FaBars, FaTimes, FaUtensils } from "react-icons/fa";
import styles from "./style.module.scss";
import { Header as HeaderComponent } from "@/types/layout/header";
import Link from "next/link";

interface HeaderProps {
  header: HeaderComponent[];
}

export default function Header({ header }: HeaderProps) {
  const [navbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => setNavbarActive(!navbarActive);

  return (
    <header className={styles.header}>
      <Link href="#" className={styles.logo}>
        <FaUtensils></FaUtensils>
        Food
      </Link>

      <div className={styles.menuBar} onClick={toggleNavbar}>
        {navbarActive ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`${styles.navbar} ${navbarActive ? styles.active : ""}`}>
        {header.map((item: HeaderComponent) => (
          <Link
            key={item._id}
            href={item.link}
            onClick={() => setNavbarActive(false)}>
            {item.span}
          </Link>
        ))}
      </nav>
    </header>
  );
}
