import { GetStaticProps } from "next";
import React from "react";
import { getAllProductsData } from "utils/next/getStaticProps/getAllProductsData";
import { ProductProps } from "pages/product/[slug]";
import Link from "next/link";
import Navbar from "components/Navbar/Navbar";
import Seo from "components/Seo";

import s from "../styles/Men.module.css";
import Footer from "components/Footer/Footer";

function men({ products }: { products: ProductProps[] }) {
  return (
    <>
      <Navbar />
      <Seo />
      <h3 className={s.productList__section__title}>
        Ropa de Hombre ( {products.length} )
      </h3>
      <div className={s.productList}>
        {products.map((product) => (
          <div key={product.id} className={s.productList__item}>
            <Link href={`/product/${product.slug}`}>
              <a>
                <div className={s.productList__item__image__container}>
                  <img
                    src={product.images[0].url}
                    width="300px"
                    height="300px"
                    alt={`${product.slug}-image`}
                    className={s.productList__item__image}
                  />
                </div>
                <div className={s.productList__item__details}>
                  <h3 className={s.productList__item__title}>{product.name}</h3>
                  <h4 className={s.productList__item__price}>
                    $ {product.price}
                  </h4>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default men;

export const getStaticProps: GetStaticProps = (ctx) => getAllProductsData(ctx);
