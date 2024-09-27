import React, { useState } from "react";

const withCounter = (WrappedContent,incrementMethod) => {
    return (props) => {
      const [count,setCount] = useState(0);

      const incrementCount = () => {
        setCount(count+1);
      }
      
      return(
        <WrappedContent 
          incrementMethod = {incrementMethod}
          incrementCount = {incrementCount}
          count = {count}
          {...props}
          />
      )
    };
}
export default withCounter;