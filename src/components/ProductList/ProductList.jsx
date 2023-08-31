import React, {useEffect, useState} from 'react';


const ProductList = ({ add }) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
    .then((res) => res.json())
    .then((data) => setItems(data))
    .catch(err => console.error('Err fetching items', err));
  }, []);

  return (
    <div className='container'>
      <div className='row'>
          {items.map(item => (
        <div className='col-md-4 pb-4'>
            <div className='card p-4' key={item.id}>
              <img src={item.image} alt={item.image}/>
              <p className='fs-3 fw-semibold'>{item.title}</p>
              <p>{item.description}</p>
              <p className='fw-semibold'>Price: {item.price} $</p>
              <button className='btn btn-outline-primary' onClick={() => add(item)}>Add to cart</button>
            </div>
          </div>
          ))}
      </div>
    </div>
  )

}

export default ProductList;