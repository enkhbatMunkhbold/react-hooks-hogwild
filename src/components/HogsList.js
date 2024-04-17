import React from "react";
import Hog from "./Hog";

function HogsList({hogs}) {

  const displayHogsList = hogs.map(hog => {
    return (
      <Hog key={hog.name} hog={hog} />
    )
  })

  return (
    <div className="ui grid container">
      {displayHogsList}
    </div>    
  )
}

export default HogsList;