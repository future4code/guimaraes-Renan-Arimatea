import React from "react";
import styled from "styled-components";

class PerguntasSelecionadas extends React.Component {

    render () {
        return (
            <div>
                <p>{this.props.pergunta}</p>

                <select>
                    {this.props.opcoes.map(opcao => (<option value={opcao}>{opcao}</option>))}
                </select>  
            </div>
        )
    }
}

export default PerguntasSelecionadas

