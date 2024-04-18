import React from "react";

function SortHogs({ onHandleSort }) {
  return (
    <div className="sorting">
      <label className="sort-label">Sort Hogs</label>
      <button name='name'onClick={onHandleSort}>By Name</button>
      <button name='weight' onClick={onHandleSort}>By Weight</button>
    </div>
  )
}

export default SortHogs