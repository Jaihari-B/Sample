import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Effect = () => {
  const boxRef = useRef(null);
  useEffect(() => {
      gsap.to(boxRef.current, {
        duration:2,
        x: 150,
        backgroundColor: '#FE6503',
        rotation: 360,
        yoyo: true,
        borderRadius: '50%',
        repeat: -2,
      });
  },[]);
  return (
    <div className='container'>
      <div className='box' ref={boxRef}></div>
    </div>
  );
};

export default Effect;