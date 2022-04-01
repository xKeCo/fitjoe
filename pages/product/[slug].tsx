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
    id: string;
    url: string;
  }[];
  categories: {
    id: string;
    name: string;
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
                key={image.id}
                src={image.url}
                alt={product.name}
                width="45%"
              />
            ))}
          </div>
        </div>
        <div className={s.product__details}>
          <p className={s.product__name}>{product.name}</p>
          <p className={s.product__categorie}>{product.categories[0].name}</p>
          <p className={s.product__description}>{product.description}</p>
          <p className={s.product__price}>$ {product.price} COP</p>
          <hr />
          <h3 className={s.product__sizes__text}>Tallas disponibles</h3>
          <p className={s.product__idk}>Guia de talla</p>
          <div className={s.product__sizes__container}>
            <div className={s.product__size}>S</div>
            <div className={s.product__size}>M</div>
            <div className={s.product__size}>L</div>
            <div className={s.product__size}>XL</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = (ctx) => getProductData(ctx);

export const getStaticPaths: GetStaticPaths = (ctx) => getProductPaths(ctx);
