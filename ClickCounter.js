import React from "react";

const clicker = ({count,incrementCount,incrementMethod}) => {
    return(
      <div>
        <p>Clicked : {count} times</p>
        <button onClick={incrementCount}>Click</button>
      </div>
    )
}
export default clicker;