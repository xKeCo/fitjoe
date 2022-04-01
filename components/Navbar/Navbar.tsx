import Image from "next/image";
import Link from "next/link";

// Styles
import s from "./Navbar.module.css";

// NextUI Components
// import { Avatar } from "@nextui-org/react";

function Navbar() {
  return (
    <>
      <div className={s.navbar}>
        <Link href="/" passHref>
          <a>
            <div className={s.navbar__imageContainer}>
              <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            </div>
          </a>
        </Link>
        <div className={s.navbar__links}>
          <Link href="/men" passHref>
            <a className={s.navbar__link}>Hombre</a>
          </Link>
          <Link href="/" passHref>
            <a className={s.navbar__link}>Mujer</a>
          </Link>
          <Link href="/" passHref>
            <a className={s.navbar__link}>Descuentos</a>
          </Link>
        </div>
        <div className={s.navbar__info}>
          <div className={s.navbar__info__icon}>
            <Image src="/heart.svg" alt="Heart" width={24} height={24} />
          </div>
          <div className={s.navbar__info__icon}>
            <Image
              src="/notification.svg"
              alt="Notification"
              width={24}
              height={24}
            />
          </div>
          {/* <div className={s.navbar__info__avatar}>
            <Avatar squared src="../defaultPhoto.svg" pointer alt="avatar" />
          </div> */}
        </div>
      </div>
      <div className={s.navbar__ad}>
        <p className={s.navbar__ad__text}>
          Envios gratis a partir de 100.000 COP. Retornos gratis y productos
          exclusivos.
        </p>
      </div>
    </>
  );
}

export default Navbar;
