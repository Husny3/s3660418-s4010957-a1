import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Summary from "../Components/Summary";
import Finance from "../Components/Finance";

function Checkout() {
  const location = useLocation();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Check if cart data is available in location state
    if (location.state && location.state.cart) {
      // Get the cart data from location state
      const cartData = location.state.cart;
      setCart(cartData);
    }
  }, [location.state]);

  const handleFinalizeCheckout = (formData) => {
    // Here you can handle the finalization of the checkout process
    // with the provided form data
    console.log("Finalizing checkout with data:", formData);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
        <Summary cart={cart} />
        <Finance onFinalizeCheckout={handleFinalizeCheckout} />
      </div>
    </div>
  );
}

export default Checkout;
