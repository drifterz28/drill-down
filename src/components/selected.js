import React from 'react';

const Selected = ({selected}) => {
  console.log(selected)
  return (
    <div className="dd-selected">
      <h2 id="selectedOptions">You Have Selected</h2>
      <ul className="dd-selected-list">

      </ul>
    </div>
  );
};

export default Selected;
