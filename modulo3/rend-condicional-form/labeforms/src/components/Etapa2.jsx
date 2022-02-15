import React from "react";
import styled from "styled-components";
import PerguntasAbertas from './PerguntasAbertas'
import PerguntasSelecionadas from './PerguntasSelecionadas'

class Etapa2 extends React.Component {

    render () {
        return (
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES DE ENSINO SUPERIOR</h2>

                <PerguntasAbertas pergunta={"5. Qual o curso?"}/>
                <PerguntasAbertas pergunta={"6. Qual a instituição de ensino?"}/>
            </div>
        )
    }
}

export default Etapa2
