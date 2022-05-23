import React from "react";
import styled from "styled-components";
import PerguntasAbertas from './PerguntasAbertas'
import PerguntasSelecionadas from './PerguntasSelecionadas'

class Etapa3 extends React.Component {

    render () {
        return (
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>

                <PerguntasAbertas pergunta={"5. Por que você não terminou a graduação?"}/>

                <PerguntasSelecionadas 
                    pergunta={"6. Você fez algum curso complementar?"}
                    opcoes={[
                        "Não fiz cursos complementares",
                        "Curso Técnico",
                        "Curso de Inglês",
                    ]}
                />
            </div>
        )
    }
}

export default Etapa3
