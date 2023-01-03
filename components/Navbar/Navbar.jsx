// Next
import Image from "next/image";
import Link from "next/link";

// Styles
import s from "./Navbar.module.css";

export function Navbar() {
  return (
    <>
      <div className={s.navbar}>
        <div className={s.navbarLeft}>
          <Link href="/" className={s.navbarLink}>
            <p className={s.navbarLinkText}>Boreal</p>
          </Link>
          <Link href="/" className={s.navbarLink}>
            <div className={s.navbarLogoContainer}>
              <Image
                className={s.navbarLogo}
                src="/Logo/logo.png"
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
          <a href="https://wa.link/y8wop2" target="_blank" rel="noreferrer">
            <div className={s.heroButton} size="sm">
              Agenda tu cita
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
