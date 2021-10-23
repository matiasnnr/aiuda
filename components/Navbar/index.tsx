/* eslint-disable @next/next/link-passhref */
import React from "react";
import Link from 'next/link'
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.nav}>
        <input type="checkbox" id={styles.nav__check} />
        <div className={styles.nav__header}>
          <Link href="/">
          <h2 className={styles.nav__title}>aiuda</h2>
          </Link>
        </div>
        <div className={styles.nav__btn}>
          {/* Label with htmlFor allows to turn checked the checkbox with the same id */}
          <label htmlFor={styles.nav__check}>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className={styles.nav__links}>
          <Link href="/">
            Inicio
          </Link>
          <Link
            href="/donations"
           >
            Donaciones
          </Link>
          <Link
            href="/evidences"
           >
            Evidencias
          </Link>
          <Link
            href="/background"
           >
            Historial de donaciones
          </Link>
          <Link
            href="/commitments"
           >
            Compromiso
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
