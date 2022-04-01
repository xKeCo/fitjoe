import client from "gcmsClient";
import { productSlugQuery } from "graphql/productQuery";
import { GetStaticPaths } from "next";

export const getProductPaths: GetStaticPaths = async () => {
  const data = await client.request(productSlugQuery);

  return {
    paths: data.products.map((product: any) => ({
      params: {
        slug: product.slug,
      },
    })),
    fallback: "blocking",
  };
};
