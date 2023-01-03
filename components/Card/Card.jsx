// Next
import Image from "next/image";

// Styles
import s from "./Card.module.css";

export function Card({ src, alt, title, description }) {
  return (
    <>
      <div className={s.card}>
        <Image
          src={src}
          alt={alt}
          width={80}
          height={80}
          priority
          className={s.cardImage}
        />
        <div className={s.card__details}>
          <h2 className={s.card__title}>{title}</h2>
          <p className={s.card__desc}>{description}</p>
        </div>
      </div>
    </>
  );
}
