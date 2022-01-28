import React from 'react';
import {CardGrandeContainer} from "./styledGrande"

function CardGrande(props) {
    return (
        <CardGrandeContainer>
            <img src={ props.imagem }/>
            <h4>{ props.nome }</h4>
            <p>{ props.descricao }</p>
        </CardGrandeContainer>
    )
}

export default CardGrande;