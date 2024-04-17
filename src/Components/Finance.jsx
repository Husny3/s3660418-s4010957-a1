import React, { useState } from "react";

const Finance = ({ onFinalizeCheckout }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const handleFinalizeCheckout = () => {
    // Here you can perform any necessary validation on the form fields
    // and then call the onFinalizeCheckout function with the form data
    const formData = {
      cardNumber,
      cardName,
      expirationDate,
      securityCode
    };
    onFinalizeCheckout(formData);
  };

  return (
    <div>
      <h2>Checkout with Card!</h2>
      <form>
        <div>
          <label htmlFor="cardNumber">Card Number: </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cardName">Name on Card: </label>
          <input
            type="text"
            id="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="expirationDate">Expiration Date (MM/YY): </label>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="securityCode">Security Code: </label>
          <input
            type="text"
            id="securityCode"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleFinalizeCheckout}>
          Finalise Checkout
        </button>
      </form>
    </div>
  );
};

export default Finance;