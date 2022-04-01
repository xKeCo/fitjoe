import Image from "next/image";
import Link from "next/link";

// Styles
import s from "./Footer.module.css";

// Svg's
import Instagram from "../../public/instagram.svg";
import Facebook from "../../public/facebook.svg";
import WhatsApp from "../../public/whatsapp.svg";

function Footer() {
  return (
    <footer className={s.footer}>
      <Link href="https://www.instagram.com/fitjoeoriginals/">
        <a target="_blank">
          <Image src={Instagram} width={45} height={45} alt="hola" />
        </a>
      </Link>
      <Link href="https://www.facebook.com/Fitjoe-Sports-768745783137159">
        <a target="_blank">
          <Image src={Facebook} width={45} height={45} alt="hola" />
        </a>
      </Link>

      <Link href="https://wa.link/133bs7">
        <a target="_blank">
          <Image src={WhatsApp} width={45} height={45} alt="hola" />
        </a>
      </Link>
    </footer>
  );
}

export default Footer;
