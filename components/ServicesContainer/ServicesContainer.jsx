// Local Components
import { ServiceCard } from "../ServiceCard/ServiceCard.jsx";

// Services Data
import { services } from "../../data/services.js";

// Styles
import s from "./ServicesContainer.module.css";

export const ServicesContainer = () => {
  return (
    <div className={s.servicesContainer}>
      <div className={s.servicesCardImage} />
      <div className={s.servicesCardContainer}>
        <div className={s.cardHeader}>
          <p>Nuestros servicios</p>
          <h2 className={s.mainTitle}>El mejor y justo tratamiendo dental</h2>
        </div>

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            src={service.src}
            alt={service.alt}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
};
