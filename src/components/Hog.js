import React, { useState } from "react";
import Details from "./Details";

function Hog({hog}) {

  const [showDetails, setShowDetails] = useState(false)

  function handleClick() {
    setShowDetails(showDetails => !showDetails)
  }

  const moreDetails = showDetails ?  <Details hog={hog} /> : null
  return (
    <div className="pigTile ui eight wide column">
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} width="100%"/>
      <div>{moreDetails}</div>
      <button  onClick={handleClick}>SHOW / HIDE</button>
    </div>
  )
}

export default Hog;