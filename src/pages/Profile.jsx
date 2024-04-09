import React from "react";

function Profile() {

  const localName = localStorage.getItem("fullname");
  const localUsername = localStorage.getItem("username");
  const localDateCreated = localStorage.getItem("dateCreated")
    


    return (
        <div className="container">
          <h1>Profile</h1>
          <div>
            <strong>Name:</strong> {localName}
          </div>
          <div>
            <strong>Email: </strong> {localUsername}
          </div>
          <div>
            <strong>date created:</strong> {localDateCreated}
          </div>
        </div>
      );
    }

export default Profile;