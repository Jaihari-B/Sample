import React from "react";

const hover = ({count,incrementCount}) => {
    return(
      <div>
        <p>Hovered : {count} times</p>
        <button onMouseOver={incrementCount}>Hover</button>
      </div>
    )
}
export default hover;