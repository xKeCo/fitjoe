import client from "gcmsClient";
import { allProductQuery } from "graphql/productQuery";
import { GetStaticProps } from "next";
import { ProductProps } from "pages/product/[slug]";

export const getAllProductsData: GetStaticProps = async () => {
  const data: { products: ProductProps[] } = await client.request(
    allProductQuery
  );

  return {
    props: { products: data.products },
  };
};
