import React from "react";
import type {Product as ProductType} from '../assets/data/list'

interface Props {
    product: ProductType;
    onPress: (product: ProductType) => void;
}

export const Product = ({product, onPress}: Props) => {
    return (
        <div
            className={`card ${product.selected ? "selected" : ""}`}
            onClick={() => onPress(product)}
        >
            <img src={require("../assets/images/" + product.img)} alt="alt" />
            <p>{product.name}</p>
            <p>
                {product.price} {product.text}
            </p>
        </div>
    );
};
