import React from "react";
import styled from "styled-components";

class PerguntasAbertas extends React.Component {

    render () {
        return (
            <div>
                <p>{this.props.pergunta}</p>
                
                <input onChange={this.props.onChange} value={this.props.value} />   
            </div>
        )
    }
}

export default PerguntasAbertas
