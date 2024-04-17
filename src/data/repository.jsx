
const USERS_KEY = "usersDB";
const USER_KEY = "loggedinuser";


// Initialise local storage "users" with data, if the data is already set this function returns immediately.
function initUsers() {
  // Stop if data is already initialised.
  if(localStorage.getItem(USERS_KEY) !== null)
    return; 

  // User data is hard-coded, passwords are in plain-text.
 
  const users = [
    { username: "test", password: "pass", dateCreated:"12/12/12"}
  ];
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

}

function getUsers() {
  // Extract user data from local storage.
  const data = localStorage.getItem(USERS_KEY);

  // Convert data to objects.
  return JSON.parse(data);
}

// NOTE: In this example the login is also persistent as it is stored in local storage.
function verifyUser(email, password) {
  const users = getUsers();

  let user = users[email]
  if (user !== undefined) {
    let userPass = user.password
    if(userPass === password) {
      setUser(user,email);
      return true;
    }
  }

  return false;
}

function setUser(user,email) {
  localStorage.setItem(USER_KEY, email);
  localStorage.setItem(USER_KEY, user.dateCreated);
  localStorage.setItem(USER_KEY, user.fullname);
  


  
}

function getUser() {
  return localStorage.getItem(USER_KEY);
}

function removeUser() {
  localStorage.removeItem(USER_KEY);
}

function addUser(email, password, name,) {
  // Retrieve existing users from local storage or initialize an empty object
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || {};

  const dateCreated = new Date();
  localStorage.setItem('dateCreated', dateCreated);

  // Add the new user to the users object
  users[email] = { password: password, name: name, dateCreated: dateCreated };

  // Save the updated users object back to local storage
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

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

const vegData = [
  {
    name: "Radish",
    tip: "Radishes prefer well-drained soil and a sunny location. Sow seeds directly into the soil about half an inch deep and one inch apart. Keep the soil consistently moist for optimal growth. Radishes are fast-growing and can be harvested in about 3-4 weeks."
  },
  {
    name: "Carrots",
    tip: "Choose a sunny location with well-drained soil for planting carrots. Sow seeds directly into the soil, spacing them according to the variety's recommendations and covering them lightly with soil. Keep the soil moist but not waterlogged. Thin seedlings to prevent overcrowding and consider mulching to retain soil moisture."
  },
  {
    name: "Cucumbers",
    tip: "Cucumbers thrive in warm weather and need ample sunlight. Plant seeds or seedlings in fertile, well-drained soil and provide support for climbing varieties. Keep the soil consistently moist and mulch to retain moisture. Regular harvesting encourages continuous production."
  },
  {
    name: "Beetroot",
    tip: "Beetroot prefers loose, well-drained soil and full sun. Sow seeds directly into the soil about half an inch deep and 1-2 inches apart. Keep the soil consistently moist, especially during germination. Thin seedlings to prevent overcrowding and provide adequate water throughout the growing season."
  },
  {
    name: "Turnips",
    tip: "Turnips are cool-season vegetables that grow well in fertile, well-drained soil. Sow seeds directly into the soil and cover lightly with soil. Keep the soil consistently moist for optimal growth. Harvest when roots reach desired size, usually within 6-8 weeks."
  },
  {
    name: "Beans",
    tip: "Beans thrive in warm weather and need full sun. Plant seeds in well-drained soil after the danger of frost has passed. Provide support for climbing varieties. Keep the soil consistently moist but not waterlogged. Harvest regularly to encourage continuous production."
  },
  {
    name: "Spinach",
    tip: "Spinach prefers cooler temperatures and partial shade. Sow seeds directly into the soil or use seedlings, spacing them about 6 inches apart. Keep the soil consistently moist and mulch to retain moisture. Harvest leaves when they reach the desired size, usually within 6-8 weeks."
  },
  {
    name: "Rocket",
    tip: "Rocket, also known as arugula, prefers cool weather and partial shade. Sow seeds directly into the soil and cover lightly with soil. Keep the soil consistently moist for optimal germination. Harvest young leaves for the best flavor and texture."
  },
  {
    name: "Bok Choy",
    tip: "Bok choy is a cool-season vegetable that grows best in well-drained soil and partial shade. Sow seeds directly into the soil or use seedlings, spacing them about 6 inches apart. Keep the soil consistently moist and provide shade during hot weather to prevent bolting."
  },
  {
    name: "Lettuce",
    tip: "Lettuce prefers cool temperatures and partial shade. Sow seeds directly into the soil or use seedlings, spacing them according to the variety's recommendations. Keep the soil consistently moist and provide shade during hot weather to prevent bolting. Harvest outer leaves as needed for a continuous harvest."
  },
  {
    name: "Zucchini",
    tip: "Zucchini thrives in warm weather and full sun. Plant seeds or seedlings in fertile, well-drained soil and provide ample space for spreading. Keep the soil consistently moist and mulch to retain moisture. Harvest fruits when they are small and tender for the best flavor."
  },
  {
    name: "Broccoli",
    tip: "Broccoli prefers cool weather and full sun. Plant seeds or seedlings in fertile, well-drained soil and provide ample space for growth. Keep the soil consistently moist and provide shade during hot weather to prevent bolting. Harvest heads when they are firm and tightly packed."
  },
  {
    name: "Snow Peas",
    tip: "Snow peas prefer cool weather and full sun. Sow seeds directly into the soil about 1 inch deep and 2 inches apart. Provide support for climbing varieties. Keep the soil consistently moist and harvest pods when they are young and tender."
  },
  {
    name: "Green Onions",
    tip: "Green onions, also known as scallions, are easy to grow in well-drained soil and full sun. Sow seeds directly into the soil or use seedlings, spacing them about 1 inch apart. Keep the soil consistently moist and harvest green tops as needed for a continuous harvest."
  },
  {
    name: "Kale",
    tip: "Kale is a cool-season vegetable that grows best in fertile, well-drained soil and partial shade. Sow seeds directly into the soil or use seedlings, spacing them about 12 inches apart. Keep the soil consistently moist and provide shade during hot weather to prevent bolting. Harvest leaves when they are young and tender for the best flavor."
  }
];

const products = [
  {
    id: 1,
    name: "carrot",
    price: 13.20
  },
  {
    id: 2,
    name: "broccoli",
    price: 8.50
  },
  {
    id: 3,
    name: "tomato",
    price: 9.99
  },
  {
    id: 4,
    name: "spinach",
    price: 7.25
  },
  {
    id: 5,
    name: "apple",
    price: 6.00
  },
  {
    id: 6,
    name: "banana",
    price: 4.99
  }
];


// Function to initialize specials data in localStorage
function initializeSpecials() {
  const currentSpecials = JSON.parse(localStorage.getItem("specials")) || [];

  // Check if there's existing data in localStorage
  if (currentSpecials.length === 0) {
    // If no existing data, set the hardcoded specials data
    localStorage.setItem("specials", JSON.stringify(specialsData));
  }
}

function initializeVegetables() {
  const currentVegetables = JSON.parse(localStorage.getItem("vegetables")) || [];

  // Check if there's existing data in localStorage
  if (currentVegetables.length === 0) {
    // If no existing data, set the hardcoded vegetables data
    localStorage.setItem("vegetables", JSON.stringify(vegData));
  }
}
function initializeProducts() {
  const currentProducts = JSON.parse(localStorage.getItem("products")) || [];

  // Check if there's existing data in localStorage
  if (currentProducts.length === 0) {
    // If no existing data, set the hardcoded products data
    localStorage.setItem("products", JSON.stringify(products));
  }
}

export {
  addUser,
  initUsers,
  verifyUser,
  getUser,
  removeUser,
  initializeVegetables,
  initializeSpecials,
  initializeProducts
}
