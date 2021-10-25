import type { NextPage } from "next";
import Link from "next/link";
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

      <section id="#home" className={styles.header__container}>
        <div className={styles.header__text}>
          <h1 className={styles.title}>Ofrece tu ayuda.</h1>
          <p className={styles.description}>
            Ayúdanos donando para entregar una tarde agradable a niños, jovenes
            y ancianos.
          </p>
        </div>
        <Card
          text={"Haz tu donación"}
          description={"Estarás apoyando a muchas personas."}
        />
        <div className={styles.header__more_options}>
          <Link href="#background">Historial de donaciones</Link>
          <ArrowIcon size={C.ICON_SMALL_SIZE} type={C.ICON_RIGHT} />
        </div>
      </section>

      {/* Commitments */}

      <section id="commitments" className={styles.commitments__container}>
        <div className={styles.header__text}>
          <h1 className={styles.subtitle}>Compromiso</h1>
          <p className={styles.description} style={{ marginBottom: 0 }}>
            Aiuda es una plataforma creada sin fines de lucro, mi objetivo
            principal es poder ayudar a las personas y poder sacar una sonrisa
            cada vez que sea posible. <br />
            <br /> Muchos de nosotros podemos disfrutar de una buena comida de
            vez en cuando, pero hay mucha gente que no puede y a través de esta
            plataforma espero poder canalizar la ayuda de las personas para
            hacer llegar esta ayuda a niños, jovenes y ancianos que lo
            necesiten.
          </p>
        </div>
      </section>

      {/* Donations */}

      <section id="donations" className={styles.donations__container}>
        <div className={styles.header__text}>
          <h1 className={styles.subtitle}>Ayúdanos</h1>
          <p className={styles.description} style={{ marginBottom: 0 }}>
            Elige un monto para donar
          </p>
        </div>
        <DonationCard>
          <div className={styles.donations__text1}>$10.000 CLP</div>
        </DonationCard>
        <DonationCard>
          <div className={styles.donations__text2}>$5.000 CLP</div>
        </DonationCard>
        <DonationCard>
          <div className={styles.donations__text3}>$1.000 CLP</div>
        </DonationCard>
      </section>

      {/* Evidences */}

      <section id="evidences" className={styles.evidences__container}>
        <div className={styles.evidences__text}>
          <div className={styles.header__text}>
            <h1 className={styles.subtitle}>Evidencias</h1>
            <p className={styles.description} style={{ marginBottom: 0 }}>
              Visitas que hemos hecho
            </p>
          </div>
        </div>
        {width > 1000 && (
          <>
            <HorizontalScroll />
            <HorizontalScroll scrollTo="left" />
          </>
        )}
        <div id="evidence" className={styles.evidences__scroll}>
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

      <section id="background" className={styles.background__container}>
        <div className={styles.header__text}>
          <h1 className={styles.subtitle}>Historial</h1>
          <p className={styles.description} style={{ marginBottom: 0 }}>
            Encuentra tu donación acá
          </p>
        </div>
        <ul className={styles.background__container_scroller}>
          <li>Lorem, ipsum dolor.</li>
          <li>Fugiat, maxime atque?</li>
          <li>Repellendus, dolorum ut.</li>
          <li>Magnam, consequatur quis?</li>
          <li>Ipsa, culpa atque?</li>
          <li>Beatae, eius vero.</li>
          <li>Aperiam, magni excepturi?</li>
          <li>Quia, repellat sed.</li>
          <li>Quis, quasi id.</li>
          <li>Architecto, vitae placeat.</li>
          <li>Vero, eum distinctio.</li>
          <li>Impedit, officiis ratione?</li>
          <li>Minus, nisi reprehenderit.</li>
          <li>Aspernatur, tempore voluptas.</li>
          <li>Eos, perferendis fuga.</li>
          <li>Quasi, culpa itaque!</li>
          <li>Dolorum, odit quasi?</li>
          <li>Laborum, possimus exercitationem.</li>
          <li>Alias, sapiente molestias.</li>
          <li>Iusto, cupiditate non.</li>
          <li>Hic, commodi dicta!</li>
          <li>Atque, voluptatum repellendus!</li>
          <li>Est, maiores perferendis!</li>
          <li>Nesciunt, hic error.</li>
          <li>Iure, perspiciatis numquam?</li>
          <li>Distinctio, possimus accusamus?</li>
          <li>Laborum, autem asperiores!</li>
          <li>Sequi, alias accusamus!</li>
          <li>Voluptatem, nam ab!</li>
          <li>Officiis, ad est?</li>
          <li>Excepturi, laudantium animi.</li>
          <li>Vel, praesentium omnis.</li>
          <li>Dolore, voluptate pariatur?</li>
          <li>Iure, earum autem?</li>
          <li>Facilis, enim dolor.</li>
          <li>Illo, aspernatur. Vel!</li>
          <li>Optio, esse ad!</li>
          <li>Quasi, totam porro.</li>
          <li>Laborum, laboriosam exercitationem!</li>
          <li>Ratione, molestias est?</li>
          <li>Fugit, mollitia fugiat?</li>
          <li>Sequi, labore voluptatibus.</li>
          <li>Explicabo, qui. Pariatur!</li>
          <li>Laudantium, eligendi tempore!</li>
          <li>Ad, corporis cum.</li>
          <li>Dolorem, voluptates obcaecati.</li>
          <li>Rerum, hic facere?</li>
          <li>Eum, consequatur? Iusto!</li>
          <li>Sapiente, totam quasi?</li>
          <li>Ipsum, delectus quas.</li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
