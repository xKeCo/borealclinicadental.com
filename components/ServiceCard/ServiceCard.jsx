// Next
import Link from "next/link";
import Image from "next/image";

// Styles
import s from "./ServiceCard.module.css";

export function ServiceCard({ src, alt, title, description, link }) {
  return (
    <div className={s.servicesCard}>
      <div className={s.servicesCard__details}>
        <Image src={src} alt={alt} width={60} height={60} priority />
        <h2 className={s.servicesCard__title}>{title}</h2>
        <p className={s.servicesCard__desc}>{description}</p>
      </div>
      {/* <Link href={link}>
        <p className={s.servicesCard__link}>Ver mas &rarr;</p>
      </Link> */}
    </div>
  );
}
