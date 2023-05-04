import React from 'react';
import ReactDOM from 'react-dom';
import Customers from './components/Customers';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="container">
    <h1>Hello World</h1>
    <Customers />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));