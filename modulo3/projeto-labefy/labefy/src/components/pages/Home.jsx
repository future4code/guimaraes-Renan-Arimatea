import React from "react";
import styled from "styled-components";
import backgroundVideo from "../video/BestSongs.mp4"


const HomeContainer = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5em 4em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-image: url("https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    min-height: 100vh;


    h1 {
        font-size: 2.5em;
        margin-bottom: .5em;
        color: #FFFF;
    }

    h1 span {
        color: #7AFFA2;
        padding: 0 0.2em;
        background-color: #222;
    }

    p {
        margin-bottom: 1.5em;
        color: #FFFF;
    }

    video {
        width: 750px;
        cursor: pointer;
    }

    button {
        background-color: black;
        color: #FFF; text-shadow: black 0.1em 0.1em 0.2em;
        font-size: 1.2em;
        font-weight: bold;
        margin-top: 4em;
        padding: 1em 4em;
        border: 1px solid #7AFFA2;
        border-radius: 1.5em;
    }

    button:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: 0.5s;
    }


`


class Home extends React.Component  {
    render () {
        return (
            <HomeContainer>
                <h1>Bem vindo ao <span>Labefy</span></h1>

                <p>Comece a escutar suas músicas favoritas agora mesmo!</p>

                <video autoPlay loop  muted id="video">
                    <source src={backgroundVideo} type="video/mp4"/>
                </video>

                <button href="">Começar</button>

            </HomeContainer>
        )
    }
}

export default Home
