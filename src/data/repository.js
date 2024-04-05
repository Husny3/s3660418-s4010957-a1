// repository.js

const specialsData = [
    {
      name: "carrot",
      original_price: 15.50,
      new_price: 13.20
    },
    {
      name: "broccoli",
      original_price: 10.75,
      new_price: 8.50
    },
    {
      name: "tomato",
      original_price: 12.20,
      new_price: 9.99
    },
    {
      name: "spinach",
      original_price: 8.99,
      new_price: 7.25
    },
    {
      name: "apple",
      original_price: 7.50,
      new_price: 6.00
    },
    {
      name: "banana",
      original_price: 6.25,
      new_price: 4.99
    }
  ];
  
  // Function to initialize specials data in localStorage
  export function initializeSpecials() {
    const currentSpecials = JSON.parse(localStorage.getItem("specials")) || [];
  
    // Check if there's existing data in localStorage
    if (currentSpecials.length === 0) {
      // If no existing data, set the hardcoded specials data
      localStorage.setItem("specials", JSON.stringify(specialsData));
    }
  }
  