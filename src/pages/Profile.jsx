import React from "react";
import { USER_KEY } from "../data/repository";

function Profile() {
  // Retrieve user details using the keys
  const localEmail = localStorage.getItem(USER_KEY + '_email');
  const localName = localStorage.getItem(USER_KEY + '_fullname');
  const localDateCreated = localStorage.getItem(USER_KEY + '_dateCreated');

  return (
    <div className="container">
      <h1>Profile</h1>
      <div>
        <strong>Name:</strong> {localName}
      </div>
      <div>
        <strong>Email: </strong> {localEmail}
      </div>
      <div>
        <strong>Date Created:</strong> {localDateCreated}
      </div>
    </div>
  );
}

export default Profile;