// Next
import Image from "next/image";

// Styles
import s from "./TeamPerson.module.css";

export function TeamPerson({ name, src, alt, desc, role }) {
  return (
    <>
      <div className={s.person}>
        <div className={s.person__image__container}>
          <Image
            className={s.person__image}
            src={src}
            alt={alt}
            width={1280}
            height={1920}
            priority
          />
        </div>
        {/* <div className={s.person}> */}
        <div className={s.personDetails}>
          <h1 className={s.personDetails__title}>{name}</h1>
          {/* <p className={s.personDetails__desc}>{desc}</p> */}
          <p className={s.personDetails__role}>{role}</p>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
