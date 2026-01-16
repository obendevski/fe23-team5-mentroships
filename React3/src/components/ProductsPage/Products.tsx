import React from 'react';
import products from '../../data/products';
import {Product} from './Product';

const Products = () => {
  return (
    <div className="mt-5">
      <table className="table table-fixed table-bordered">
        <thead>
          <tr>
            <th style={{width: '5%'}}>#</th>
            <th style={{width: '15%'}}>Name</th>
            <th style={{width: '20%'}}>Description</th>
            <th style={{width: '8%'}}>Unit</th>
            <th style={{width: '30%'}}>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod, idx) => {
            return <Product key={idx} prod={prod} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
