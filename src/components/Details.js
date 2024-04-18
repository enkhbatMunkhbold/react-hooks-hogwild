import React from "react";

function Details({ hog }) {
  console.log( hog.greased )
  const isGreased = hog.greased ? 'true' : 'false'

  return (
    <ul className="hoggyText">
      <li>SPECIALTY: {hog.specialty}</li>
      <li>WEIGHT: {hog.weight}</li>
      <li>GREASED: {isGreased}</li>
      <li className="achievementText">
        ACHIEVEMENT: {hog['highest medal achieved']}
      </li>      
    </ul>
  )
}

export default Details;