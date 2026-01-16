import React, {useState} from 'react';
import products, {Ingredient, Product} from '../../data/products';
import DisplayOrder from '../DisplayOrder/DisplayOrder';

const Order = () => {
  const [ordered, setOrdered] = useState<Product[]>([]);
  const [selectedProd, setSelectedProd] = useState<Product | null>(null);
  const [ingredientsToOrder, setIngredientsToOrder] =
    useState<Record<string, Ingredient>>();

  const selectProd = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let chosenProduct = products.find(p => p.id.toString() === e.target.value);

    if (chosenProduct) {
      setSelectedProd(chosenProduct);
    }
  };

  const updateSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProd((prevState: any) => {
      return {
        ...prevState,
        amount: parseInt(e.target.value || ''),
      };
    });
  };

  const onAddItem = () => {
    setOrdered((prevState: any) => {
      return [...prevState, selectedProd];
    });
    setSelectedProd(null);
  };

  const generateOrder = (orderedProp: Product[]) => {
    const allIngredients: Record<string, Ingredient> = {};

    orderedProp.forEach(order => {
      order.ingredients.forEach((i: Ingredient) => {
        if (!allIngredients[i.name]) {
          allIngredients[i.name] = {
            name: i.name,
            amount: i.amount * (order.amount ?? 1),
            unit: i.unit,
          };
        } else {
          allIngredients[i.name].amount =
            allIngredients[i.name].amount + i.amount * (order.amount ?? 1);
        }
      });
    });

    if (allIngredients) {
      setIngredientsToOrder(allIngredients);
    }
  };

  const closeModal = () => {
    setIngredientsToOrder(undefined);
    setOrdered([]);
  };

  return (
    <div className="mt-5">
      {ingredientsToOrder && (
        <DisplayOrder
          closeModal={closeModal}
          openModal={ingredientsToOrder != null}
          ingredients={ingredientsToOrder}
        ></DisplayOrder>
      )}
      <button
        disabled={ordered.length === 0}
        onClick={e => generateOrder(ordered)}
        className="mb-2 btn btn-primary"
      >
        Generate Order
      </button>
      <table className="table table-fixed table-bordered">
        <thead>
          <tr>
            <th style={{width: '5%'}}>#</th>
            <th style={{width: '25%'}}>Name</th>
            <th style={{width: '20%'}}>Description</th>
            <th style={{width: '15%'}}>Unit</th>
            <th style={{width: '15%'}}>Amount</th>
            <th style={{width: '13%'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ordered.map((prod, idx) => {
            return (
              <tr key={idx}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.description}</td>
                <td>{prod.unit}</td>
                <td>{prod.amount}</td>
                <td></td>
              </tr>
            );
          })}
          <tr>
            <td>{ordered.length + 1}</td>
            <td>
              <select
                value={selectedProd?.id}
                onChange={e => {
                  selectProd(e);
                }}
                className="form-control"
              >
                <option value="--">Select product</option>
                {products.map(prod => {
                  return (
                    <option key={prod.id} value={prod.id}>
                      {prod.name}
                    </option>
                  );
                })}
              </select>
            </td>
            <td>{selectedProd?.description}</td>
            <td>{selectedProd?.unit}</td>
            <td>
              <input
                value={selectedProd?.amount || ''}
                name="amount"
                onChange={e => {
                  updateSelected(e);
                }}
                className="form-control"
                type="text"
              />
            </td>
            <td>
              <button
                disabled={!selectedProd}
                onClick={onAddItem}
                className="btn btn-success"
              >
                Add Item
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;
