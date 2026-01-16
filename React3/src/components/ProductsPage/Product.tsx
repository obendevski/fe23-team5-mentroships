import React, {useState} from 'react';
import {Ingredient, Product as ProductType} from '../../data/products';

export const Product = ({prod}: {prod: ProductType}) => {
  const [showNormatives, setShowNormatives] = useState<boolean>(false);

  const renderNormatives = (normatives: Ingredient[]): JSX.Element => {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Unit</th>
          </tr>
        </thead>
        <tbody>
          {normatives &&
            normatives.map((norm, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx}</td>
                  <td>{norm.name}</td>
                  <td>{norm.amount}</td>
                  <td>{norm.unit}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  };

  return (
    <tr>
      <td>{prod.id}</td>
      <td>{prod.name}</td>
      <td>{prod.description}</td>
      <td>{prod.unit}</td>
      <td>
        <span
          className="c-pointer"
          onClick={() => setShowNormatives(prevState => !prevState)}
        >
          {showNormatives ? 'Hide' : 'Show'} normatives
        </span>
        {showNormatives && renderNormatives(prod.ingredients)}
      </td>
    </tr>
  );
};
