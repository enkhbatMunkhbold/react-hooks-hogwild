import React, { useState } from "react";
import Details from "./Details";

function Hog({hog}) {

  const [showDetails, setShowDetails] = useState(false)

  function handleClick() {
    setShowDetails(!showDetails)
  }

  function displayDetails() {
    return (
      <Details {...hog} />
    )
  }

  const moreDetails = showDetails ? displayDetails : null
  return (
    <div className="pigTile ui eight wide column">
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} width="100%"/>
      {moreDetails}
      <button  onClick={handleClick}>Show/Hide</button>
    </div>
  )
}

export default Hog;