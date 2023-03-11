import { useState } from "react";

function Card({image, name, button= true}) {
    return (
        <div className='card'>
            <img src={image}/>
            <h3>{name}</h3>
            {button ? <button>Adicionar</button> : <></>}     
        </div>
    )
}

export default Card;