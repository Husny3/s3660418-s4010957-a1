
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

export {
  addUser,
  initUsers,
  verifyUser,
  getUser,
  removeUser,
  
}
