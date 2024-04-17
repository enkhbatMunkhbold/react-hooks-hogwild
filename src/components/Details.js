import React from "react";

function Details({specialty, weight, greased}) {
  console.log(specialty, weight, greased)
  return (
    <ul>
      <li>{specialty}</li>
      <li>{weight}</li>
      <li>{greased}</li>
    </ul>
  )
}

export default Details;