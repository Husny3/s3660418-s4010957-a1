import React from "react";

function Home(props) {
  return (
    <div className="text-center">
      <h1 className="display-4">Home</h1>
      {props.username !== null && <h4><strong>Hello {props.username}!</strong></h4>}
    </div>
  );
}

export default Home;