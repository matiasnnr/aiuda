import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Card from "@components/Cards/Card";
import ArrowIcon from "@components/Icons/ArrowIcon";
import Navbar from "@components/Navbar";
import styles from "../styles/Home.module.css";
import * as C from "@helpers/constants";
import DonationCard from "@components/Cards/DonationCard";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    return {
      width: 0,
      height: 0,
    };
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const Home: NextPage = () => {
  const { width } = useWindowDimensions();

  const HorizontalScroll = ({ scrollTo = "right" }) => {
    let text = "right";
    let scroll = () =>
      // @ts-ignore: Object is possibly 'null'.
      (document.getElementById("evidence").scrollLeft += width);

    if (scrollTo === "left") {
      // @ts-ignore: Object is possibly 'null'.
      scroll = () => (document.getElementById("evidence").scrollLeft -= width);
      text = "left";
    }

    return (
      <button
        className={`${
          scrollTo === "left" ? styles.button_left : styles.button_right
        }`}
        onClick={scroll}
        style={{ right: `${scrollTo === "left" ? -1 : 0}` }}
      >
        {text}
      </button>
    );
  };

  return (
    <main>
      {/* Navbar */}

      <Navbar />

      {/* Header */}
      <section className={styles.header__container}>
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

      <section className={styles.evidences__container}>
        {width > 1000 && (
          <>
            <HorizontalScroll />
            <HorizontalScroll scrollTo="left" />
          </>
        )}
        <div id="evidence" className={styles.evidences}>
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
        </div>
      </section>

      {/* Background */}

      <section style={{ backgroundColor: "purple" }}>
        <h1 style={{ marginTop: 0 }}>Section Four</h1>
      </section>

      {/* Donations */}

      <section
        id="donations"
        className={styles.donations__container}
        style={{ backgroundColor: "salmon" }}
      >
        <DonationCard />
        <DonationCard />
        <DonationCard />
      </section>
    </main>
  );
};

export default Home;
