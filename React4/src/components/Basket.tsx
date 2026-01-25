import React, {  useMemo } from "react";
import { SelectedProduct } from "./SelectedProduct";
import type { Product as ProductType } from "../assets/data/list";

interface Props {
  selectedProducts: ProductType[];
  placeOrder: any;
  history: any;
  onAddItem: (prod: ProductType) => void;
  onRemoveItem: (prod: ProductType) => void;
  unselect: (product: ProductType, select: boolean) => void;
}

export const Basket = ({
  placeOrder,
  history,
  selectedProducts,
  onAddItem,
  onRemoveItem,
}: Props) => {
  const totalPrice = useMemo(() => {
    let price = 0;
    selectedProducts.forEach((p) => {
      price += p.price * p.amount;
    });
    return price;
  }, [selectedProducts]);

  const goBack = () => {
    history.push("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <button className="btn btn-outline-primary" onClick={goBack}>
        Go To Product List
      </button>
      <div style={{ textAlign: "center" }}>
        <div className="basket">
          {selectedProducts?.map((prod, i) => (
            <SelectedProduct
              key={i}
              product={prod}
              onMinusClick={onRemoveItem}
              onPlusClick={onAddItem}
            />
          ))}
          {selectedProducts.length === 0 && (
            <p style={{ marginTop: "50px" }}>EMPTY BASKET</p>
          )}
        </div>
        <p>Total amount: {totalPrice} den</p>
        <button className="btn btn-primary" onClick={placeOrder}>
          PlaceOrder
        </button>
      </div>
    </div>
  );
};

function sum(a, b) {
  return a + b;
}

sum(1, 1);
sum(1, 1);
sum(1, 1);
sum(1, 1);
sum(1, 1);
sum(1, 1);
sum(1, 1);
sum(1, 1);
sum(1, 1);


function memoize(fn) {
    (1,1): 2,
    (1,2): 3,
}

memoize(sum(1,2))

