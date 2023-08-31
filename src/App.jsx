import './App.css';
import { useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';

function App() {

  const [addedItems, setItem] = useState([]);

  const add = (item) => {
    setItem([...addedItems, item]);
  }

  return (
    <div className="App container pt-5">
      <div className='row'>
        <div className='col-md-9'>
        <ProductList add={add}/>
        </div>
        <div className='col'>
        <Cart addedItems={addedItems}/>
        </div>
      </div>
    </div>
  );
}

export default App;
