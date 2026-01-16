import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import './App.css';
import Products from './components/ProductsPage/Products';
import Order from './components/Order/Order';

function App() {
  const [route, setRoute] = useState<'products' | 'order'>('products');

  return (
    <div className="container">
      <div className="navbar navbar-dark container">
        <ul className="nav">
          <li className="nav-item" onClick={() => setRoute('products')}>
            <span className="nav-link">Products</span>
          </li>
          <li className="nav-item" onClick={() => setRoute('order')}>
            <span className="nav-link">Order</span>
          </li>
        </ul>
      </div>
      {route === 'products' ? <Products /> : null}
      {route === 'order' ? <Order /> : null}
    </div>
  );
}

export default App;
