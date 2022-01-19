import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import s from "../styles/Home.module.css";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Card from "../components/Card";
import ServiceCard from "../components/ServiceCard";
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material/";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Implantes dentales",
        "Diseños de sonrisa",
        "Cirugías orales",
        "Odontología sin limites",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 600,
      showCursor: false,
      smartBackspace: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
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
            <span ref={el}></span>.
          </p>
          <Button className={s.heroButton}>
            <a href="#" target="_blank">
              Agenda tu cita
            </a>
          </Button>
        </div>
        <div className={s.heroImageContainer}>
          <Image
            className={s.heroImage}
            src="/Logo.svg"
            alt="Logo Boreal"
            width={450}
            height={450}
            priority
          />
        </div>
      </div>

      {/* Icon Container */}
      <div className={s.iconContainer}>
        <div className={s.icon}>
          <Image src="/Down.svg" alt="Down Icon" width={45} height={45} />
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
            "Instalaciones con los equipos mas modernos a su disposición"
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
                la forma y tamaño original de tus dientes, recuperando la estética de una sonrisa ideal."
            link="#"
          />
          <ServiceCard
            src="/tooth.png"
            alt="Endodoncia icon"
            title="Endodoncia"
            description="Tratamiento conservador por el cual se retira el nervio con el fin de conservar o
                recuperar la integridad y función del diente comprometido por enfermedad, trauma o una
                disposición prot&eacute;sica."
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
            alt="Odontolog&iacute;a general icon"
            title="Odontolog&iacute;a general"
            description="Un excelente cuidado y una rutina de prevenci&oacute;n son 
            pilares fundamentales para una sonrisa y un cuerpo saludable. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            link="#"
          />
        </div>
      </div>

      {/* Team container */}
      <div className={s.teamHeaderContainer}>
        <p>Nuestro equipo</p>
        <h2>
          Comprometidos con el cuidado <br /> de tu salud dental
        </h2>
      </div>
      <div className={s.teamContainer}>
        <div className={s.personContainer}>
          <div className={s.personDetails}>
            <h1>Dra. Sandra Pe&ntilde;a</h1>
            <p>
              Especialista en Implantología Oral y Reconstructiva egresada de la
              Fundación universitaria CIEO - UNICIEO, con más de 13 años de
              experiencia en diferentes ramas de la odontología en Colombia y
              España, ofrece un diagnostico multidisciplinario que garantiza la
              mejor elección en su plan de tratamiento, predecibilidad y
              ejecución del mismo, recuperando su salud, estética y confort.
            </p>
          </div>
          <div className={s.personImageContainer}>
            <Image
              className={s.personImage}
              src="/DraSandra.jpeg"
              alt="Imagen Dra. Sandra Pe&ntilde;a"
              width={500}
              height={750}
              priority
            />
          </div>
        </div>
      </div>

      <footer className={s.footer}>
        <div className={s.footerContactDetailsContainer}>
          <div>
            <h3>Disponibilidad</h3>
            <p>
              Lun: 9:00 am - 6:00 pm <br />
              Mar: 9:00 am - 6:00 pm <br />
              Mie: 9:00 am - 6:00 pm <br />
              Jue: 9:00 am - 6:00 pm <br />
              Vie: 9:00 am - 6:00 pm <br />
              Sab: Citas programadas
            </p>
          </div>
          <div>
            <h3>Contacto</h3>
            <p>
              Carrera 2da # 58-04, Los Andes,
              <br /> Cali, Colombia.
            </p>
            <p>
              Cel. +57 (322) 200-9244 <br />
            </p>
            <div className={s.socialMediaContainer}>
              <div>
                <InstagramIcon color="secondary" sx={{ fontSize: 27 }} />
              </div>
              <div>
                <FacebookIcon color="primary" sx={{ fontSize: 27 }} />
              </div>
              <div>
                <WhatsAppIcon color="success" sx={{ fontSize: 27 }} />
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className={s.lowerFooter}>
          <p>Boreal Clinica Dental 2021 - Todos los derechos reservados.</p>
          <div className={s.terminos}>
            <a href="#">
              <p>Terminos y condiciones</p>
            </a>
            <a href="#">
              <p>Politicas de privacidad</p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
