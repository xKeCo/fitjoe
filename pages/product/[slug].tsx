import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { getProductData } from "utils/next/getStaticProps/getProductData";
import { getProductPaths } from "utils/next/getStaticPaths/getProductPaths";
import Image from "next/image";
import Seo from "components/Seo";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

export interface ProductProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: {
    url: string;
  }[];
}

export default function ProductPage({ product }: { product: ProductProps }) {
  return (
    <>
      <Seo />
      <Navbar />
      <div>
        <h1>{product.name}</h1>
        <Image
          src={product.images[0].url}
          width={250}
          height={250}
          alt={`${product.slug}-image`}
        />
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = (ctx) => getProductData(ctx);

export const getStaticPaths: GetStaticPaths = (ctx) => getProductPaths(ctx);
