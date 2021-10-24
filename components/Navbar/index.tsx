/* eslint-disable @next/next/link-passhref */
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const handleCheckBox = () => {
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById(styles.nav__check).checked = false;
  };

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
          <div onClick={handleCheckBox}>
            <Link href="#home">Inicio</Link>
          </div>
          <div onClick={handleCheckBox}>
            <Link href="#donations">Donaciones</Link>
          </div>
          <div onClick={handleCheckBox}>
            <Link href="#evidences">Evidencias</Link>
          </div>
          <div onClick={handleCheckBox}>
            <Link href="#background">Historial de donaciones</Link>
          </div>
          <div onClick={handleCheckBox}>
            <Link href="#commitments">Compromiso</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
