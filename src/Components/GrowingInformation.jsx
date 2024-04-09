import React, { useState } from "react";
// import "./GrowingInformation.css"; // Import CSS file for styling (if needed)

const vegetables = [
  "Radish", "Carrots", "Cucumbers", "Beetroot", "Turnips",
  "Beans", "Spinach", "Rocket", "Bok Choy", "Lettuce",
  "Zucchini", "Broccoli", "Snow Peas", "Green Onions", "Kale"
];

function GrowingInformation() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedVegetable, setSelectedVegetable] = useState("");
  const [vegetableTip, setVegetableTip] = useState("");

  const handleVegetableClick = (vegetable) => {
    const storedVegetables = JSON.parse(localStorage.getItem("vegetables")) || [];
    const selectedVegetableInfo = storedVegetables.find(veg => veg.name === vegetable);

    if (selectedVegetableInfo) {
      setSelectedVegetable(selectedVegetableInfo.name);
      setVegetableTip(selectedVegetableInfo.tip);
      setPopupVisible(true);
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="vegetable-grid">
      {vegetables.map((vegetable, index) => (
        <button
          key={index}
          className="vegetable-button"
          onClick={() => handleVegetableClick(vegetable)}
        >
          {vegetable}
        </button>
      ))}

      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <h2>{selectedVegetable}</h2>
            <p>{vegetableTip}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GrowingInformation;