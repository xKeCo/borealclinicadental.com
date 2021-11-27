import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import s from "../styles/Home.module.css";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Card from "../components/Card";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <div className={s.container}>
      <SEO />
      <Navbar />

      {/* Hero container with text in the left side and a image in the right side */}
      <div className={s.heroContainer}>
        <div className={s.heroText}>
          <h1 className={s.heroTextMain}>
            Boreal <br /> Clin&iacute;ca Dental
          </h1>
          <p className={s.heroTextSecondary}>
            Odontolog&iacute;a sin l&iacute;mites.
          </p>
          <Button auto className={s.heroButton}>
            <a href="#" target="_blank">
              Agenda tu cita
            </a>
          </Button>
        </div>
        <div className={s.heroImageContainer}>
          <Image
            className={s.heroImage}
            src="/Logo.svg"
            alt="hero"
            width={450}
            height={450}
            priority
          />
        </div>
      </div>

      {/* Icon Container */}
      <div className={s.iconContainer}>
        <div className={s.icon}>
          <Image src="/Down.svg" alt="html" width={45} height={45} />
        </div>
      </div>

      {/* Card Container */}
      <div className={s.cardContainer}>
        <Card
          src={"/people1.png"}
          alt={"People icon"}
          title={"2260+"}
          description={"Pacientes luciendo una hermosa sonrisa."}
        />
        <Card
          src={"/dentist-chair.png"}
          alt={"Dentist chair"}
          title={"2+"}
          description={
            "Instalaciones con los equipos mas modernos a su disposicion"
          }
        />
        <Card
          src={"/experience.png"}
          alt={"Experience icon"}
          title={"12+"}
          description={"Años de experiencia."}
        />
      </div>

      {/* Services container */}
      <div className={s.servicesContainer}>
        <div className={s.servicesCardImage} />
        <div className={s.servicesCardContainer}>
          <div className={s.cardHeader}>
            <p>Nuestros servicios</p>
            <h2>El mejor y justo tratamiendo dental</h2>
          </div>
          <ServiceCard
            src="/implants.png"
            alt="Dental Implants icon"
            title="Implante Dental"
            description="Producto sanitario diseñado para sustituir la raíz que falta y para mantener el diente artificial en su sitio. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            link="#"
          />
          <ServiceCard
            src="/smile.png"
            alt="Diseño de sonrisa icon"
            title="Diseño de sonrisa"
            description="Recubrimiento dental por medio de laminillas o carillas en materiales de ultima
                generaci&oacute;n con altos est&aacute;ndares de calidad, que retornan el color,
                textura, forma y tamaño que siempre haz preferido."
            link="#"
          />
          <ServiceCard
            src="/braces.png"
            alt="Ortodoncia icon"
            title="Ortodoncia"
            description="Tratamiento conservador ideal para corregir toda clase de mal posición, manteniendo
                la forma y tamaño original de tus dientes, recuperando la estética de una sonrisa
                ideal."
            link="#"
          />
          <ServiceCard
            src="/tooth.png"
            alt="Endodoncia icon"
            title="Endodoncia"
            description="Tratamiento conservador por el cual se retira el nervio con el fin de conservar o
                recuperar la integridad y función del diente comprometido por enfermedad, trauma o una
                disposición protésica."
            link="#"
          />
          <ServiceCard
            src="/surgery.png"
            alt="Cirugia oral icon"
            title="Cirug&iacute;a Oral"
            description="Procedimientos con el fin de controlar la evolución de una patolog&iacute;a y/o
                devolver la salud oral. (exodoncias, Frenectomia, Injertos &oacute;seos,
                regularizaci&oacute;n de rebordes, preservaciones de reborde &oacute;seo)."
            link="#"
          />
          <ServiceCard
            src="/general.png"
            alt="Odontologia general icon"
            title="Odontologia general"
            description="Un excelente cuidado y una rutina de prevencion son 
            pilares fundamentales para una sonrisa y un cuerpo saludable. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            link="#"
          />
        </div>
      </div>

      <footer className={s.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={s.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
