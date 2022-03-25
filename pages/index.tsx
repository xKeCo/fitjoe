import type { NextPage } from "next";
import Image from "next/image";

// Styles
import s from "../styles/Home.module.css";

// Svgs and images
import Product from "../public/foto.png";

// Local Components
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";
import TrendingCard from "../components/TrendingCard";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Navbar />
      <div className={s.container}>
        <main className={s.main}>
          <div className={s.hero}>
            <div className={s.hero__detail}>
              <h1 className={s.hero__detail__title}>Nueva Sleevjoe OX </h1>
              <Link href={"/product/slevjoeXO"} passHref>
                <a>
                  <Button className={s.hero__detail__button}> Ver más </Button>
                </a>
              </Link>
            </div>
            <img className={s.hero__image} src="/mainWeb.png" alt="Logo" />
            <img
              className={s.hero__image2}
              src="/mainResponsive.png"
              alt="Logo"
            />
          </div>
          <h3 className={s.trending__title}>Tendencias</h3>
          <div className={s.trending}>
            <div className={s.trending__products}>
              <TrendingCard src="/pic1.png" title="The Bujoe Long" />
              <TrendingCard src="/pryzon.png" title="Pryzon T-shirt" />
              <TrendingCard src="/slevjoe.png" title="The Slevjoe" />
              <TrendingCard src="/fitjoe.svg" title="Mas Productos" />
            </div>
          </div>
        </main>

        <footer className={s.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by
            <span className={s.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
