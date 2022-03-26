import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { getProductData } from "utils/next/getStaticProps/getProductData";
import { getProductPaths } from "utils/next/getStaticPaths/getProductPaths";

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
    <div>
      <h1>{product.name}</h1>
      <img src={product.images[0].url} alt="" />
    </div>
  );
}

export const getStaticProps: GetStaticProps = (ctx) => getProductData(ctx);

export const getStaticPaths: GetStaticPaths = (ctx) => getProductPaths(ctx);
