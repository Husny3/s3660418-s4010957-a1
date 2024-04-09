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
            <th>Name</th>
            <th>Original Price</th>
            <th>New Price</th>
          </tr>
        </thead>
        <tbody>
          {specials.map((special, index) => (
            <tr key={index}>
              <td>{special.name}</td>
              <td>${special.original_price.toFixed(2)}</td>
              <td>${special.new_price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpecialInfo;