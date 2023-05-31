import React from 'react';
import { CardBack } from './CardBack';
import { CardFront } from './CardFront';

export const CardTemplate = ({back, rotated, onClick}) => {
  let rote = rotated ? '180' : '0';
  return (
    <div
      style={{
        background:'none',
        borderRadius: '5px',
        height:'124px',
        width: '74px',
        border: 'black solid 8px',
        perspective: '1000px',
        margin:'auto auto',
        boxShadow: '0px 0px 10px rgba(255, 255, 255,0.2)',
        transformStyle: 'preserve-3d',
        transition: 'transform 1000ms',
        transform: 'rotateY('+rote+'deg)',
        cursor: 'pointer',
        position: 'relative'
      }}
      onClick={onClick}
    >
      <CardBack imgBack={back}/>
      <CardFront/>
    </div>
  );
};

