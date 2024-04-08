import React, { useState } from "react";

const Modal = (props) => {
  const { onClose } = props;

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <h2>Select Headers</h2>
          <div className="cols-container">
            <ul>
              <li>
                Col-1
                <input type="checkbox" />
              </li>
              <li>
                Col-2
                <input type="checkbox" />
              </li>
              <li>
                Col-3
                <input type="checkbox" />
              </li>
              <li>
                Col-4
                <input type="checkbox" />
              </li>
              <li>
                Col-5
                <input type="checkbox" />
              </li>
              <li>
                Col-6
                <input type="checkbox" />
              </li>
              <li>
                Col-7
                <input type="checkbox" />
              </li>
              <li>
                Col-8
                <input type="checkbox" />
              </li>
              <li>
                Col-9
                <input type="checkbox" />
              </li>
              <li>
                Col-10
                <input type="checkbox" />
              </li>
            </ul>
            <ul>
              <li>
                Col-11
                <input type="checkbox" />
              </li>
              <li>
                Col-12
                <input type="checkbox" />
              </li>
              <li>
                Col-13
                <input type="checkbox" />
              </li>
              <li>
                Col-14
                <input type="checkbox" />
              </li>
              <li>
                Col-15
                <input type="checkbox" />
              </li>
              <li>
                Col-16
                <input type="checkbox" />
              </li>
              <li>
                Col-17
                <input type="checkbox" />
              </li>
              <li>
                Col-18
                <input type="checkbox" />
              </li>
              <li>
                Col-19
                <input type="checkbox" />
              </li>
              <li>
                Col-20
                <input type="checkbox" />
              </li>
            </ul>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
