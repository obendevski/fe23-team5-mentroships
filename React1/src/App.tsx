import React from 'react';
import './App.css';
import {Main} from './components/Main';
import {Navbar} from './components/Navbar';
import {Trends} from './components/Trends';

function App() {
  return (
    <div className="container-fluid" style={{background: 'black'}}>
      <div className="row">
        <div className="container" style={{background: 'black'}}>
          {/* whole application goes here */}
          <div className="row">
            <Navbar />
            <Main />
            <Trends />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
