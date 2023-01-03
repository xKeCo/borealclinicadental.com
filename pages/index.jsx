// React
import { useEffect, useRef } from "react";

// Next
import Image from "next/image";

// Used Components
import Typed from "typed.js";

// Local Components
import {
  Card,
  SEO,
  ServicesContainer,
  Footer,
  TeamContainer,
} from "../components";

// Styles
import s from "../styles/Home.module.css";

// Next Ui Components
import { Button } from "@nextui-org/react";

// Data
import { logros } from "../data/logros";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Implantes dentales",
        "Diseños de sonrisa",
        "Cirugías orales",
        "Odontología sin limites",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 600,
      showCursor: false,
      smartBackspace: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={s.container}>
      <SEO title="Boreal - Clin&iacute;ca Dental" />

      {/* Hero container with text in the left side and a image in the right side */}
      <div className={s.heroContainer}>
        <div className={s.heroText}>
          <h1 className={s.heroTextMain}>
            Boreal <br /> Cl&iacute;nica Dental
          </h1>
          <p className={s.heroTextSecondary}>
            <span ref={el}></span>.
          </p>
          <a
            href="https://wa.link/y8wop2"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={s.heroButton}>Agenda tu cita</div>
          </a>
        </div>
        <div className={s.heroImageContainer}>
          <Image
            className={s.heroImage}
            src="/Logo/logo.png"
            alt="Logo Boreal"
            // width={350}
            // height={350}
            fill
            priority
          />
        </div>
      </div>

      {/* Icon Container */}
      <div className={s.iconContainer}>
        <div className={s.icon}>
          <Image src="/Down.svg" alt="Down Icon" width={45} height={45} />
        </div>
      </div>

      {/* Card Container */}
      <div className={s.cardContainer}>
        {logros.map((logro) => (
          <Card
            key={logro.id}
            src={logro.src}
            alt={logro.alt}
            title={logro.title}
            description={logro.description}
          />
        ))}
      </div>

      {/* Services container */}
      <ServicesContainer />

      {/* Team container */}
      <TeamContainer />

      <div className={s.bookingSection}>
        <div className={s.bookingText}>
          <h1 className={s.bookingMainText}>
            Estamos para ayudarte,
            <br />
            no dudes en contactarnos.
          </h1>
          <a
            href="https://wa.link/y8wop2"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button size="small" className={s.bookingButton}>
              Cont&aacute;ctanos
            </Button>
          </a>
        </div>
        <div className={s.bookingImageContainer}>
          <Image
            className={s.bookingImage}
            src="/calendar.svg"
            alt="Logo Boreal"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
