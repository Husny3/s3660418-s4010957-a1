import React from "react";

const Summary = ({ cart }) => {
  // Calculate total price of items in cart
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Calculate total GST
  const gst = totalPrice * 0.1;

  // Calculate total cost
  const totalCost = totalPrice * 0.9;

  return (
    <div>
      <h3>Here is a summary of your order:</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.quantity}x {item.name} (${(item.price * item.quantity).toFixed(2)})
          </li>
        ))}
      </ul>
      <p>Cost: ${totalCost.toFixed(2)}</p>
      <p>Total GST: ${gst.toFixed(2)}</p>
      <p>Total Cost: ${(totalPrice).toFixed(2)}</p>
    </div>
  );
};

export default Summary;
