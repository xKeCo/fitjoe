import Image from "next/image";
import Link from "next/link";

// Svgs and images
import Logo from "../public/logo.svg";
import heart from "../public/heart.svg";
import notification from "../public/notification.svg";

// Styles
import s from "./styles/Navbar.module.css";

// NextUI Components
import { Avatar } from "@nextui-org/react";

function Navbar() {
  return (
    <>
      <div className={s.navbar}>
        <Link href="/" passHref>
          <a>
            <div className={s.navbar__imageContainer}>
              <Image src={Logo} alt="Logo" width={50} height={50} />
            </div>
          </a>
        </Link>
        <div className={s.navbar__links}>
          <Link href="/" passHref>
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
            <Image src={heart} alt="Heart" width={24} height={24} />
          </div>
          <div className={s.navbar__info__icon}>
            <Image
              src={notification}
              alt="Notification"
              width={24}
              height={24}
            />
          </div>
          <div className={s.navbar__info__avatar}>
            <Avatar squared src="../defaultPhoto.svg" pointer />
          </div>
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
