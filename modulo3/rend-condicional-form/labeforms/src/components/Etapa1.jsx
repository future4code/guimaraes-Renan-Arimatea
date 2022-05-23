import React from "react";
import styled from "styled-components";
import PerguntasAbertas from './PerguntasAbertas'
import PerguntasSelecionadas from './PerguntasSelecionadas'

class Etapa1 extends React.Component {

    render () {
        return (
            <div>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                
                <PerguntasAbertas pergunta={"1. Qual o seu nome?"}/>
                <PerguntasAbertas pergunta={"2. Qual a sua idade?"}/>
                <PerguntasAbertas pergunta={"3. Qual o seu email?"}/>

                <PerguntasSelecionadas 
                    pergunta={"4. Qual a sua escolaridade?"}
                    opcoes={[
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"
                    ]}
                />
            </div>
        )
    }
}

export default Etapa1
