import React from "react";
import { Product } from "./Product";
import Cart from "../assets/images/cart.png";
import type { Product as ProductType } from "../assets/data/list";

interface Props {
  products: ProductType[];
  history: any;
  clickProduct: (product: ProductType) => void;
}

export const ProductList = ({ products, history, clickProduct }: Props) => {
  const gotoBasket = () => {
    history.push("/basket");
  };

  return (
    <div>
      <img className="cart" src={Cart} onClick={gotoBasket} alt="alt" />
      <div className="product-list">
        {products.map((prod, i) => (
          <Product key={i} product={prod} onPress={clickProduct} />
        ))}
      </div>
    </div>
  );
};
