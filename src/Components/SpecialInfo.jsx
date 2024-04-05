import React from "react";

function SpecialInfo() {
  // Fetch specials from localStorage or initialize as empty array if it doesn't exist
  const specials = JSON.parse(localStorage.getItem("specials")) || [];

  return (
    <div>
      <h2>Specials Information</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Special</th>
          </tr>
        </thead>
        <tbody>
          {specials.map((special, index) => (
            <tr key={index}>
              <td>{special.item}</td>
              <td>{special.special}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpecialInfo;