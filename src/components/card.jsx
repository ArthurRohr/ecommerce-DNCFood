import { useState } from "react";

function Card(image, name) {
    return (
        <div className='card'>
            <img src={image}/>
            <h3>{name}</h3>
            <button>Adicionar</button>
        </div>
    )
}

export default Card;