import React from "react";

function Filter({ onChangeGrease }) {
  return (
    <div className="Filter">
      <select name="filter" onChange={onChangeGrease}>
        <option value='all'> All </option>
        <option value='greased'> Greased </option>
        <option value='ungreased'> Ungreased </option>
      </select>
    </div>
  )
}

export default Filter;