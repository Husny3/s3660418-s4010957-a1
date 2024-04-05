import React, { useEffect } from "react";
import { initializeSpecials } from "../data/repository";

function Home(props) {
  // Call initializeSpecials function when the component mounts
  useEffect(() => {
    initializeSpecials();
  }, []);

  return (
    <div className="text-center">
      <h1 className="display-4">Home</h1>
      {props.username !== null && <h4><strong>Hello {props.username}!</strong></h4>}
    </div>
  );
}

export default Home;