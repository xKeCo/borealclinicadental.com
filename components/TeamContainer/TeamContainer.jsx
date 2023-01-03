// Local Components
import { TeamPerson } from "../";
import { team } from "../../data/team";

// Styles
import s from "./TeamContainer.module.css";

export const TeamContainer = () => {
  return (
    <div className={s.team__mainContainer}>
      <div className={s.teamHeaderContainer}>
        <p className={s.teamHeaderContainer__subTitle}>Nuestro equipo</p>
        <h2 className={s.teamHeaderContainer__title}>
          Comprometidos con el cuidado <br /> de tu salud dental
        </h2>
      </div>
      <div className={s.teamContainer}>
        {team.map((person) => (
          <TeamPerson
            key={person.id}
            name={person.name}
            // desc={person.desc}
            role={person.role}
            src={person.src}
            alt={person.alt}
          />
        ))}
      </div>
    </div>
  );
};
