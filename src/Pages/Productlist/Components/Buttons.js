import React from "react";
import "./Buttons.scss";

function Buttons({ fetchPen }) {
  return (
    <div className="pageBtn">
      <button data-idx="1" onClick={fetchPen}>
        1
      </button>
      <button data-idx="2" onClick={fetchPen}>
        2
      </button>
      <button data-idx="3" onClick={fetchPen}>
        3
      </button>
      <button data-idx="4" onClick={fetchPen}>
        4
      </button>
      <button data-idx="5" onClick={fetchPen}>
        5
      </button>
    </div>
  );
}

export default Buttons;
