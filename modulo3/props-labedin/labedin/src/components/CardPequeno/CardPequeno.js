import React from "react";
import {CardPequenoContainer} from "./styledPequeno"

function CardPequeno (props) {
    return (
        <CardPequenoContainer> 
            <img src={props.imagem}/>
            <h4>{props.label}</h4>
            <p>{props.txt}</p>
        </CardPequenoContainer>
        
    )
}

export default CardPequeno;