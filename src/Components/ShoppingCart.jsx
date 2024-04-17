import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (productId) => {
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const products = JSON.parse(localStorage.getItem("products")) || [];
      const productToAdd = products.find(product => product.id === productId);
      if (productToAdd) {
        setCart([...cart, { ...productToAdd, quantity: 1 }]);
      }
    }
  };

  const removeFromCart = (productId) => {
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity -= 1;
      if (updatedCart[existingItemIndex].quantity <= 0) {
        updatedCart.splice(existingItemIndex, 1);
      }
      setCart(updatedCart);
    }
  };

  const calculatePrice = (price, quantity) => {
    return price * quantity;
  };

  const products = JSON.parse(localStorage.getItem("products")) || [];

  const totalPrice = cart.reduce((total, item) => {
    return total + calculatePrice(item.price, item.quantity);
  }, 0);

  const handleCheckout = () => {
    // Navigate to the checkout page and pass the cart data as state
    if (cart.length === 0) {
        alert("You have no items in your shopping cart!");
    }
    else {
        navigate('/Shopping/Checkout', { state: { cart: cart } });
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Add</th>
            <th>Remove</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                <button onClick={() => addToCart(product.id)}>+</button>
              </td>
              <td>
                <button onClick={() => removeFromCart(product.id)}>-</button>
              </td>
              <td>
                {cart.find(item => item.id === product.id)?.quantity || 0}
              </td>
              <td>${calculatePrice(product.price, cart.find(item => item.id === product.id)?.quantity || 0).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      <div>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
