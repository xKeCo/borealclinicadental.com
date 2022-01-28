import React from "react";
import s from "./styles/teamPerson.module.css";
import Image from "next/dist/client/image";

export default function teamPerson({ name, src, desc }) {
  return (
    <>
      <div className={s.teamContainer}>
        <div className={s.personContainer}>
          <div className={s.personDetails}>
            <h1>{name}</h1>
            <p>{desc}</p>
          </div>
          <div className={s.personImageContainer}>
            <Image
              className={s.personImage}
              src={src}
              alt="Imagen Dra. Sandra Pe&ntilde;a"
              width={250}
              height={350}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
