import s from "./styles/Navbar.module.css";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/dist/client/link";

function Navbar() {
  return (
    <>
      <div className={s.navbar}>
        <div className={s.navbarLeft}>
          <Link
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            className={s.navbarLink}
          >
            <p className={s.navbarLinkText}>Boreal</p>
          </Link>
          <Link
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            className={s.navbarLink}
          >
            <div className={s.navbarLogoContainer}>
              <Image
                className={s.navbarLogo}
                src="/Logo.svg"
                alt="hero"
                width={50}
                height={50}
                priority
              />
            </div>
          </Link>
        </div>
        <div className={s.navbarRight}>
          {/* <Drawer /> */}
          <a
            href="https://wa.link/y8wop2"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button className={s.heroButton} size="small">
              Agenda tu cita
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
