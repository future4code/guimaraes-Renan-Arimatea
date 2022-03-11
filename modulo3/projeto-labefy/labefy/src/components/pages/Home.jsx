import React from "react";
import styled from "styled-components";
import labefy from "../../images/labefy.png"

const HomeContainer = styled.div`
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 4em;
    }

    h1 {
        font-size: 2.5em;
        margin-bottom: .5em;
    }

    h1 span {
        color: #B0DA85;
        padding: 0 0.2em;
        background-color: #222;
    }

    p {
        margin-bottom: 1.5em;
        color: #7B7B7B;
    }

    img {
        width: 450px;
        margin: 2em 0;
    }

`


class Home extends React.Component  {
    render () {
        return (
            <HomeContainer>
                <h1>Bem vindo ao <span>Labefy</span></h1>

                <p>Comece a escutar suas músicas agora mesmo!</p>

                
                <img src={labefy} alt="Labefy" />
            </HomeContainer>
        )
    }
}

export default Home
