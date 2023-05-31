import React from 'react'

export const PantallaWin = ({contraste, zIndex})=>{


    return(
        <div
        style={{
            opacity: contraste,
            color:'white',
            backgroundColor: 'black',
            fontFamily: "Arial Narrow",
            position:'absolute',
            zIndex:zIndex,
            height: "100%",
            left:0,
            top:0,
            right:0,
            bottom:0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '100px',
            transition: 'opacity 500ms ease-in-out'
        }}
        >
            <p>Juego completado</p>
            <button onClick={()=>{location. reload()}}>Refresh</button>
        </div>
    )
}

