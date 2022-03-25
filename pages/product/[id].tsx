import { useRouter } from "next/router";
import React from "react";

function Product() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product: {id}</h1>
    </div>
  );
}

export default Product;
