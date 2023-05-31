import React from 'react';
import ReactDOM from 'react-dom';
import { PantallaWin } from './components/PantallaWin';
import {CardRepository} from './components/CardRepository';

const App = () => {

    const [points,setPoints] = React.useState(0)
        const [contraste, setContraste] = React.useState('0')
        const [zIndex, setZIndex] = React.useState(0)
        const [mov,setMov] = React.useState(0)

        const cambiarPunteo = () => {
            setPoints(prevState=> {
                if((prevState+1)>=8){
                    setTimeout(()=>{setContraste('50')}, 1000)
                    setTimeout(()=>{setZIndex(2)}, 1000)
                    setZIndex(2)
                }
                return prevState+1
                }
            )

        }

    return(
        <div

                style={{
                    width: '100%',
                    height:'100%',
                    background: 'linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px, linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px, linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px, linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px, linear-gradient(90deg, #1b1b1b 10px, transparent 10px), linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)',
                    backgroundColor:'#131313',
                    backgroundSize:'20px 20px',
                    margin:'0px, 0px',
                    pading:'0px'
                }}
            >

                <div
                    style={{
                        position: 'relative',
                        zIndex:3
                    }}
                >
                    <h1 style={{
                        fontFamily: "Arial Narrow",
                        color: 'white'
                    }}>Score: {points}</h1>
                    <h1 style={{
                        fontFamily: "Arial Narrow",
                        color: 'white',
                        position:'relative',
                        zIndex:3
                    }}>Movimientos: {mov}</h1>
                </div>
                <div style={{
                    position: 'relative',
                    zIndex:1
                }}>


                    <CardRepository setScore={()=>{cambiarPunteo()}} setMov = {()=>setMov(mov+1)}/>
                </div>
                <PantallaWin contraste={contraste} zIndex={zIndex}></PantallaWin>



            </div>
    )
  };
const root = ReactDOM.createRoot(document.getElementById('root'))
document.body.style.margin='0px'
document.body.style.marginTop ='-22px'
root.render(<App/>)