import React from "react";
import Details from "./Details";

function Hog({hog}) {

  const showDetails = e => {
    console.log(e.target)
    return (
      <Details {...hog} />
    )
  }
  return (
    <li className="pigTile ui eight wide column" onClick={showDetails}>
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} width="100%"/>
    </li>
  )
}

export default Hog;