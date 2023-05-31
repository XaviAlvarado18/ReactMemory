import React from 'react'

export const CardFront = () => {
  return (
    <img src={'./cartas/vision.png'} style={{
        borderRadius: '5px',
        height:'100%',
        width: '150%',
        backfaceVisibility:'hidden',
        margin:'0px 0px 0px -18px',
        position:'absolute'
    }
    }/>
  )
}
