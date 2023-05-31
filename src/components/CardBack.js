import React from 'react'

export const CardBack = ({imgBack}) => {
  return (
    <img src={imgBack} style={{
        borderRadius: '5px',
        height:'100%',
        width: '100%',
        backfaceVisibility:'hidden',
        transform: 'rotateY(180deg)',
        position:'absolute'
        
    }
    }/>
  )
}
