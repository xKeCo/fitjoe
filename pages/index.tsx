import type { NextPage } from "next";
import Image from "next/image";

// Styles
import s from "../styles/Home.module.css";

import { useUser } from "@auth0/nextjs-auth0";

// Local Components
import Navbar from "../components/Navbar/Navbar";
import Seo from "../components/Seo";
import TrendingCard from "../components/TrendingCard";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Footer from "components/Footer/Footer";

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <Seo />
      <Navbar />
      <div className={s.container}>
        <main className={s.main}>
          <div className={s.hero}>
            <div className={s.hero__detail}>
              <h1 className={s.hero__detail__title}>Nueva Sleevjoe OX </h1>
              <Link href={"/product/sleevjoe-ox"} passHref>
                <a>
                  <Button className={s.hero__detail__button}> Ver más </Button>
                </a>
              </Link>
            </div>
            <img
              className={s.hero__image}
              src="/mainWeb.png"
              alt="Logo"
              width="100%"
            />
            <img
              className={s.hero__image2}
              src="/mainResponsive.png"
              alt="Logo"
              width="100%"
            />
          </div>

          <h2 className={s.trending__title}>Tendencias</h2>
          <div className={s.trending}>
            <div className={s.trending__products}>
              <TrendingCard
                src="/bujoeLong.png"
                title="The Bujoe Long"
                href="/product/the-bujoe-long"
              />
              <TrendingCard
                src="/pryzon.png"
                title="Pryzon T-shirt"
                href="/product/pryzon"
              />
              <TrendingCard
                src="/slevjoe.png"
                title="The Slevjoe"
                href="/product/slevjoe"
              />
              <TrendingCard
                src="/fitjoe.svg"
                title="Mas Productos"
                href="/men"
              />
            </div>
          </div>
        </main>
      </div>
      <Link href="/api/auth/login">
        <a>Login</a>
      </Link>

      {user && (
        <div>
          {user.name}
          <Link href="/api/auth/logout">
            <a>Logout</a>
          </Link>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;
