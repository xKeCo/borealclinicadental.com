import React from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./styles/ServiceCard.module.css";

function ServiceCard({ src, alt, title, description, link }) {
  return (
    <div>
      <div className={s.servicesCard}>
        <Image src={src} alt={alt} width={60} height={60} priority />

        <h2>{title}</h2>
        <p>{description}</p>
        {/* <Link href={link}>
          <a>Conoce mas &rarr;</a>
        </Link> */}
      </div>
    </div>
  );
}

export default ServiceCard;
