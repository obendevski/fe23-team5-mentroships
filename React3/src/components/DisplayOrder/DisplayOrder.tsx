import React from 'react';
import {Ingredient} from '../../data/products';

interface Props {
  ingredients: Record<string, Ingredient>;
  closeModal: () => void;
  openModal?: boolean;
}

const DisplayOrder = ({closeModal, openModal, ingredients}: Props) => {
  return (
    <div>
      <div
        className="modal bd-example-modal-lg"
        style={{display: openModal ? 'block' : 'none'}}
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              Order of ingredients you need to make.
            </div>

            <div className="modal-body">
              <table className="table table-fixed table-bordered">
                <thead>
                  <tr>
                    <th style={{width: '5%'}}>#</th>
                    <th style={{width: '25%'}}>Name</th>
                    <th style={{width: '25%'}}>Unit</th>
                    <th style={{width: '25%'}}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(ingredients).map((val, idx) => {
                    const ing = val[1];
                    return (
                      <tr key={idx}>
                        <td>{idx}</td>
                        <td>{ing.name}</td>
                        <td>{ing.unit}</td>
                        <td>{ing.amount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="modal-footer">
              <button
                onClick={closeModal}
                className="btn btn-primary"
              >
                Place the order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayOrder;
