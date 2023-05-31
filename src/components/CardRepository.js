import React from 'react';
import {CardTemplate} from './cardTemplate';

export const CardRepository = ({setScore,setMov}) => {
    var arrayImages = [
        'cartas/Loteria-ElBorracho.jpg',
        'cartas/Loteria-ElCatrin.jpg',
        'cartas/Loteria-ElParaguas.jpg',
        'cartas/Loteria-ElSoldado.jpg',
        'cartas/Loteria-LaCorona.jpg',
        'cartas/Loteria-LaDama.jpg',
        'cartas/Loteria-LaLuna.jpg',
        'cartas/Loteria-LaPera.jpg',
        'cartas/Loteria-ElBorracho.jpg',
        'cartas/Loteria-ElCatrin.jpg',
        'cartas/Loteria-ElParaguas.jpg',
        'cartas/Loteria-ElSoldado.jpg',
        'cartas/Loteria-LaCorona.jpg',
        'cartas/Loteria-LaDama.jpg',
        'cartas/Loteria-LaLuna.jpg',
        'cartas/Loteria-LaPera.jpg'
    ]
    const [roteded, setRoteded] = React.useState(Array(16).fill(false))
    const randomIndex = (max) => {
        return Math.floor(Math.random() * max);
    };

    const shuffledArray = arrayImages.slice();

    shuffledArray.sort(() => {
        return randomIndex(2) - 1;
    });

    const [rombo,setRombo] = React.useState([])

    const changePoint =(newRombo) =>{
        console.log(newRombo)

        if(newRombo.length >1){
            setMov()
            if (imgsa.current[newRombo[0]] === imgsa.current[newRombo[1]]){
                setScore()
            }else {
                setTimeout(()=>{
                    setRoteded(prevState => {
                    const newRoteded = [...prevState]
                    newRoteded[newRombo[1]] = !newRoteded[newRombo[1]]
                    newRoteded[newRombo[0]] = !newRoteded[newRombo[0]]
                    return newRoteded
                })},1000)
            }
            setRombo([])
        }

    }





    const imgsa = React.useRef([...shuffledArray])
    const clickeable =(index)=>{

        if(roteded[index] !==true){

            setRoteded(prevState => {
                const newRoteded = [...prevState]
                newRoteded[index] = !newRoteded[index]
                return newRoteded
            })
            setRombo(prevState=>{
                    const newRombo = [...prevState]
                    newRombo.push(index)
                    changePoint(newRombo)
                    return newRombo
                }
            )


        }



    }


    return(
        <div
            style={{
                width: '720px',
                heigth:'680px',
                margin: 'auto',
                display: 'grid',
                gridTemplateRows: 'repeat(4, 170px)',
                gridTemplateColumns: 'repeat(4, 180px)'

            }}

        >
            {imgsa.current.map((item, index) => (
                <CardTemplate key={index} back={item} onClick={() => clickeable(index)} rotated={roteded[index]}/>
            ))}

        </div>
    )
}
