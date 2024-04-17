import React from "react";
import Hog from "./Hog";

function HogsList({hogs}) {

  const displayHogsList = hogs.map(hog => {
    return (
      <Hog key={hog.name} hog={hog} />
    )
  })

  return (
    <ul className="ui grid container">
      {displayHogsList}
    </ul>    
  )
}

export default HogsList;