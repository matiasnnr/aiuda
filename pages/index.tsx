import type { NextPage } from "next";
import Card from "@components/Card";
import ArrowIcon from "@components/Icons/ArrowIcon";
import Navbar from "@components/Navbar";
import styles from "../styles/Home.module.css";
import * as C from "@helpers/constants";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    const gra = function (min, max) {
      return Math.random() * (max - min) + min;
    };

    const gri = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const init = function () {
      let items = document.querySelectorAll(".gallery li");
      for (let i = 0; i < items.length; i++) {
        items[i].style.minWidth = gra(30, 60) + "vw";
      }
    };
    init();
  }, []);

  return (
    <main>
      {/* Navbar */}

      <Navbar />

      {/* Header */}
      <section className={styles.header}>
        <div className={styles.header__text}>
          <h1 className={styles.title}>Ofrece tu ayuda.</h1>
          <p className={styles.description}>
            Ayúdanos donando para entregar una tarde agradable a niños, jovenes
            y ancianos.
          </p>
        </div>
        <Card
          text={"Haz tu donación"}
          description={"No hay mínimo y todo aporte es bienvenido."}
        />
        <div className={styles.header__more_options}>
          <span>Historial de donaciones</span>
          <ArrowIcon size={C.ICON_SMALL_SIZE} type={C.ICON_RIGHT} />
        </div>
      </section>

      {/* Commitments */}

      <section style={{ backgroundColor: "yellow" }}>
        <h1>Section Two</h1>
      </section>

      {/* Evidence */}

      <section className={styles.evidences}>
        <div className={styles.child}>
          <div className={styles.child__content}>a</div>
        </div>
        <div className={styles.child}>
          <div className={styles.child__content}>b</div>
        </div>
        <div className={styles.child}>
          <div className={styles.child__content}>c</div>
        </div>
        <div className={styles.child}>
          <div className={styles.child__content}>d</div>
        </div>
      </section>

      {/* Background */}

      <section style={{ backgroundColor: "purple" }}>
        <h1>Section Four</h1>
      </section>

      {/* Donations */}

      <section style={{ backgroundColor: "salmon" }}>
        <h1>Section Five</h1>
      </section>
    </main>
  );
};

export default Home;
