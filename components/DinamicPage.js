import React from "react";
import Navbar from "./Navbar";
import s from "./styles/DinamicPage.module.css";
import { Button } from "@nextui-org/react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

export default function DinamicPage({ title, subtitle, description }) {
  return (
    <>
      <Navbar />
      <div className={s.container}>
        <div className={s.headContainer}>
          <h1 className={s.headMainText}>{title}</h1>
          <p className={s.headSecText}>{subtitle}</p>
          <Button className={s.heroButton}>
            <a
              href="https://wa.link/y8wop2"
              rel="noopener noreferrer"
              target="_blank"
            >
              M&aacute;s informaci&oacute;n proximamente!
            </a>
          </Button>
          <Button className={s.backButton}>
            <Link href="/" rel="noopener noreferrer">
              Ir al Inicio
            </Link>
          </Button>
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
