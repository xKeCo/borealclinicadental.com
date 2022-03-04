import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";

// Used Components
import Typed from "typed.js";

// Local Components
import Navbar from "../components/Navbar";
import IconsCard from "../components/IconsCard";
import ServiceCard from "../components/ServiceCard";
import TeamPerson from "../components/TeamPerson";

// Styles
import s from "../styles/Home.module.css";

// Next Ui Components
import { IconButton } from "@mui/material";
import { Button } from "@nextui-org/react";

// Icons
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material/";

// Images
import Logo from "../public/Logo.png";

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
      <Head>
        <title>Boreal Clinica Dental</title>
        <meta
          name="description"
          content="Sitio web oficial de Boreal Clinica Dental"
        />
        <link rel="icon" href="/Logo.png" />
      </Head>
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
          <a
            href="https://wa.link/y8wop2"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button className={s.heroButton}>Agenda tu cita</Button>
          </a>
        </div>
        <div className={s.heroImageContainer}>
          <Image
            className={s.heroImage}
            src={Logo}
            alt="Logo Boreal"
            width={350}
            height={350}
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
        <IconsCard
          src={"/people1.png"}
          alt={"People icon"}
          title={"2260+"}
          description={"Pacientes luciendo una hermosa sonrisa."}
        />
        <IconsCard
          src={"/dentist-chair.png"}
          alt={"Dentist chair"}
          title={"2+"}
          description={
            "Instalaciones con los equipos mas modernos a su disposición"
          }
        />
        <IconsCard
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
            <h2 className={s.mainTitle}>El mejor y justo tratamiendo dental</h2>
          </div>
          <ServiceCard
            src="/implants.png"
            alt="Dental Implants icon"
            title="Implantes Dental"
            description="Producto sanitario diseñado para sustituir la raíz que falta y para mantener el diente artificial en su sitio."
            link="/implantes"
          />
          <ServiceCard
            src="/smile.png"
            alt="Diseño de sonrisa icon"
            title="Diseño de sonrisa"
            description="Recubrimiento dental por medio de laminillas o carillas en materiales de ultima
                generaci&oacute;n con altos est&aacute;ndares de calidad, que retornan el color,
                textura, forma y tamaño que siempre haz preferido."
            link="/sonrisa"
          />
          <ServiceCard
            src="/braces.png"
            alt="Ortodoncia icon"
            title="Ortodoncia"
            description="Tratamiento conservador ideal para corregir toda clase de mal posición, manteniendo
                la forma y tamaño original de tus dientes, recuperando la estética de una sonrisa ideal."
            link="/ortodoncia"
          />
          <ServiceCard
            src="/tooth.png"
            alt="Endodoncia icon"
            title="Endodoncia"
            description="Tratamiento conservador por el cual se retira el nervio con el fin de conservar o
                recuperar la integridad y función del diente comprometido por enfermedad, trauma o una
                disposición prot&eacute;sica."
            link="/endodoncia"
          />
          <ServiceCard
            src="/surgery.png"
            alt="Cirugia oral icon"
            title="Cirug&iacute;a Oral"
            description="Procedimientos con el fin de controlar la evolución de una patolog&iacute;a y/o
                devolver la salud oral. (exodoncias, Frenectomia, Injertos &oacute;seos,
                regularizaci&oacute;n de rebordes, preservaciones de reborde &oacute;seo)."
            link="/cirugia"
          />
          <ServiceCard
            src="/general.png"
            alt="Odontolog&iacute;a general icon"
            title="Odontolog&iacute;a general"
            description="Un excelente cuidado y una rutina de prevenci&oacute;n son 
            pilares fundamentales para una sonrisa y un cuerpo saludable."
            link="/general"
          />
        </div>
      </div>

      {/* Team container */}
      <div className={s.teamHeaderContainer}>
        <p>Nuestro equipo</p>
        <h2 className={s.mainTitle}>
          Comprometidos con el cuidado <br /> de tu salud dental
        </h2>
      </div>

      <TeamPerson
        name="Dra. Sandra Pe&ntilde;a"
        desc="Especialista en Implantología Oral y Reconstructiva egresada de la
              Fundación universitaria CIEO - UNICIEO, con más de 13 años de
              experiencia en diferentes ramas de la odontología en Colombia y
              España, ofrece un diagnostico multidisciplinario que garantiza la
              mejor elección en su plan de tratamiento, predecibilidad y
              ejecución del mismo, recuperando su salud, estética y confort."
        src="/DraSandra.jpeg"
      />
      <TeamPerson
        name="Dra. Valeria Salazar"
        desc="Odont&oacute;loga egresada del colegio odontol&oacute;gico colombiano con un diplomada en est&eacute;tica dental
        en la Universidad del Valle - UNIVALLE, con alta destreza en la prevenci&oacute;n, el control y la restauraci&oacute;n 
        de lesiones dentales con ayuda de materiales restauradores directos de ultima generaci&oacute;n, devolviendo as&iacute;; 
        la est&eacute;tica y funcionalidad del sistema oral de manera inmediata. Logrando una armon&iacute;a dental en cuanto a 
        la forma, el color, la est&eacute;tica y la funcionalidad."
        src="/DraValeria.jpeg"
      />

      <div className={s.bookingSection}>
        <div className={s.bookingText}>
          <h1 className={s.bookingMainText}>
            Estamos para ayudarte,
            <br />
            no dudes en contactarnos.
          </h1>
          <a
            href="https://wa.link/y8wop2"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button size="small" className={s.bookingButton}>
              Cont&aacute;ctanos
            </Button>
          </a>
        </div>
        <div className={s.bookingImageContainer}>
          <Image
            className={s.bookingImage}
            src="/calendar.svg"
            alt="Logo Boreal"
            width={300}
            height={300}
            priority
          />
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
                <a
                  href="https://www.instagram.com/clinicadentalboreal/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconButton
                    color="secondary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <InstagramIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/BorealClinicaDental/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <FacebookIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </a>
              </div>
              <div>
                <a
                  href="https://wa.link/y8wop2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconButton
                    color="success"
                    aria-label="upload picture"
                    component="span"
                  >
                    <WhatsAppIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className={s.lowerFooter}>
          <p>Boreal Clinica Dental 2021 - Todos los derechos reservados.</p>
          <div className={s.terminos}>
            {/* <a href="#" rel="noopener noreferrer"> */}
            <p>Terminos y condiciones</p>
            {/* </a> */}
            {/* <a href="#" rel="noopener noreferrer"> */}
            <p>Politicas de privacidad</p>
            {/* </a> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
