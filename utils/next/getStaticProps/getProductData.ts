import client from "gcmsClient";
import { productQuery } from "graphql/productQuery";
import { GetStaticProps } from "next";
import { ProductProps } from "pages/product/[slug]";

export const getProductData: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const data: { products: ProductProps[] } = await client.request(
    productQuery,
    {
      slug,
    }
  );

  if (!data.products.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product: data.products[0] },
  };
};
