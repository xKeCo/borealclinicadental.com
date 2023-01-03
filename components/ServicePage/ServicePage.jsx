// Next
import Link from "next/link";

// Local Components

// Styles
import s from "./ServicePage.module.css";

// NextUI
import { Button } from "@nextui-org/react";

export function ServicePage({ title, subtitle, description }) {
  return (
    <>
      <div className={s.container}>
        <div className={s.headContainer}>
          <h1 className={s.headMainText}>{title}</h1>
          <p className={s.headSecText}>{subtitle}</p>
          <a
            href="https://wa.link/y8wop2"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button className={s.heroButton}>
              M&aacute;s informaci&oacute;n proximamente!
            </Button>
          </a>
          <Link href="/" rel="noopener noreferrer">
            Ir al Inicio
          </Link>
        </div>
        {/* <div className={s.iconContainer}>
          <div className={s.icon}>
            <Image src="/Down.svg" alt="Down Icon" width={45} height={45} />
          </div>
        </div>
        <div>
          <p>{description}</p>
        </div> */}
      </div>
    </>
  );
}
