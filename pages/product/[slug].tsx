import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

// GetStaticProps and GetStaticPaths
import { getProductData } from "utils/next/getStaticProps/getProductData";
import { getProductPaths } from "utils/next/getStaticPaths/getProductPaths";

// Local Components
import Seo from "components/Seo";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

// Styles
import s from "../../styles/Product.module.css";
import Slider from "components/Slider/Slider";

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
      <div className={s.product}>
        <div className={s.product__images__container}>
          <Slider images={product.images} />
          <div className={s.product__images}>
            {product.images.map((image) => (
              <img
                key={image.url}
                src={image.url}
                alt={product.name}
                width="45%"
              />
            ))}
          </div>
        </div>
        <div className={s.product__details}>
          <h2 className={s.product__name}>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price} COP</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = (ctx) => getProductData(ctx);

export const getStaticPaths: GetStaticPaths = (ctx) => getProductPaths(ctx);
