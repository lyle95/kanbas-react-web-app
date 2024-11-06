import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables" className="mt-4">
      <h2 className="mb-3">Array State Variable</h2>
      <button onClick={addElement} className="btn btn-success mb-3" id="wd-add-element-btn">
        Add Element</button>
      <ul className="list-group w-50">
        {array.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <button onClick={() => deleteElement(index)}
                    id="wd-delete-element-click" className="btn btn-danger btn-sm">
              Delete</button>
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
}
