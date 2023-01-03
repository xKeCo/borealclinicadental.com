// Next
import Image from "next/image";

// Styles
import s from "./BookingSection.module.css";

export const BookingSection = () => {
  return (
    <div className={s.bookingSection}>
      <div className={s.bookingText}>
        <h1 className={s.bookingMainText}>
          Estamos para ayudarte, no dudes en contactarnos.
        </h1>
        <a
          href="https://wa.link/y8wop2"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={s.bookingButton}>Cont&aacute;ctanos</div>
        </a>
      </div>
      <div className={s.bookingImageContainer}>
        <Image
          className={s.bookingImage}
          src="/calendar.svg"
          alt="Logo Boreal"
          // width={300}
          // height={300}
          fill
        />
      </div>
    </div>
  );
};
