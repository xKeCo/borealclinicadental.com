import s from "./styles/Card.module.css";
import Image from "next/image";

function IconsCard({ src, alt, title, description }) {
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
        <div>
          <h2>{title}</h2>
          <p className={s.heroTextSecondary}>{description}</p>
        </div>
      </div>
    </>
  );
}

export default IconsCard;
