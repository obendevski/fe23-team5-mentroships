import React from "react";
import { Product } from "../assets/data/list";
import minus_sign from "../assets/images/minus.png";
import plus_sign from "../assets/images/plus.png";

interface Props {
    product: Product;
    onMinusClick: (product: Product) => void;
    onPlusClick: (product: Product) => void;
}

export const SelectedProduct = ({product, onMinusClick, onPlusClick}: Props) => {
    return (
        <div className="selected-product">
            <span style={{ float: "left" }}>{product.name}</span>
            <span style={{ float: "right" }}>
                <img
                    src={minus_sign}
                    onClick={() => onMinusClick(product)}
                    alt="alt"
                />
                <span>{product.amount}</span>
                <img
                    src={plus_sign}
                    onClick={() => onPlusClick(product)}
                    alt="alt"
                />
            </span>
        </div>
    );
};
