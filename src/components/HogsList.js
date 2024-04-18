import React from "react";
import Hog from "./Hog";

function HogsList({hogs}) {

  const displayHogsList = hogs.map(hog => {
    return (
      <Hog key={hog.name} hog={hog} />
    )
  })

  return (
    <section>
      <div className="ui grid container">
      {displayHogsList}
    </div> 
    </section>       
  )
}

export default HogsList;