import React from "react";

const Cart = ({ addedItems }) => {

  const totalPrice = addedItems
  .reduce((pre, cur) => {
    return pre + cur.price
  }, 0)
  .toFixed(2); 

  return (
    <div>
      <h2>Shopping Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {addedItems.map((item, i) => (
            <tr key={i}>
              <th scope="row">{i+1}</th>
              <td>{item.title}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: ${totalPrice}</p>
    </div>
  )

}

export default Cart;