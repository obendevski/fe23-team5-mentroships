import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import productList, { Product } from "./assets/data/list";
import { Basket } from "./components/Basket";
import { ProductList } from "./components/ProductList";

export const App = () => {
  const [products, setProducts] = useState<Product[]>(productList);

  const clickProduct = (prod: Product) => {
    setProducts((prevState) => {
      return prevState.map((p) => {
        if (p.id === prod.id) {
          return {
            ...p,
            selected: !p.selected,
          };
        }
        return p;
      });
    });
  };

  const placeOrder = () => {
    setProducts((prevState) => {
      return prevState.map((p) => {
        return {
          ...p,
          selected: false,
        };
      });
    });
  };

  const onAddItem = (prod: Product) => {
    setProducts((prevState) => {
      return prevState.map((p) => {
        if (p.id === prod.id) {
          return {
            ...p,
            amount: p.amount + 1,
          };
        }
        return p;
      });
    });
  };

  const onRemoveItem = (prod: Product) => {
    if (prod.amount === 1) {
      setProducts((prevState) => {
        return prevState.map((p) => {
          if (p.id === prod.id) {
            return {
              ...p,
              selected: false,
            };
          }
          return p;
        });
      });
    } else {
      setProducts((prevState) => {
        return prevState.map((p) => {
          if (p.id === prod.id) {
            return {
              ...p,
              amount: p.amount - 1,
            };
          }
          return p;
        });
      });
    }
  };

  return (
    <div className="App">
      <Router>
        <Route
          path="/"
          exact
          render={(props: any) => (
            <ProductList
              {...props}
              products={products}
              clickProduct={clickProduct}
            />
          )}
        />
        <Route
          path="/basket"
          render={(props: any) => (
            <Basket
              {...props}
              selectedProducts={products.filter((p) => p.selected)}
              unselect={clickProduct}
              onAddItem={onAddItem}
              onRemoveItem={onRemoveItem}
              placeOrder={placeOrder}
            />
          )}
        />
      </Router>
    </div>
  );
};
