import React from "react";
import styled from "styled-components";

import icon_2 from "../../images/icon_2.webp"
import icon_3 from "../../images/icon_3.webp"

const Main = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    padding: 5em;
    margin: auto;

    background-image: url("https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;


    h1 {
        font-size: 2em;
        color: #FFF;
        text-align: center;
        justify-content: center;
        padding-bottom: 1em;
    }

    h1 span {
        color: #7AFFA3;
        padding: 0 0.2em;
        background-color: #000000;

        -webkit-animation-name: blinker;
        -webkit-animation-duration: 1s;
        -webkit-animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-name: blinker;
        -moz-animation-duration: 1s;
        -moz-animation-timing-function: linear;
        -moz-animation-iteration-count: infinite;
        animation-name: blinker;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        @-moz-keyframes blinker {
            0% {
                opacity: 1.0;
            }
            50% {
                opacity: 0.0;
            }
            100% {
                opacity: 1.0;
            }
        }

        @-webkit-keyframes blinker {
            0% {
                opacity: 1.0;
            }
            50% {
                opacity: 0.0;
            }
            100% {
                opacity: 1.0;
            }
        }

        @keyframes blinker {
            0% {
                opacity: 1.0;
            }
            50% {
                opacity: 0.0;
            }
            100% {
                opacity: 1.0;
            }
        }
    }

    img {
        height: 700px;
        width: 30%;
    }

    img:hover {
        transform: scale(1.1);
        transition: .4s;
        border-radius: 3em;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;

        background-color: #000000;
        color: #FFF;
        padding: 1em;
        margin: auto;
    }

    div p {
        text-align: center;
        padding: 8em;
    }

    div p span {
        color: #7AFFA2;
        padding: 0 0.2em;
    }

`

const Container_1 = styled.div`

    display: flex;

    
    iconContent_1 img {
        width: 300px;
        height: 250px;

        position: absolute;
        left: 55%;
        top: 40%
    }
    
    iconContent_1 img:hover {
        transform: scale(1.1);
        transition: .3s;
    }
       
`

const Container_2 = styled.div`

    display: flex;
    

    img {
        position: relative;
        left: 70%;

    }

    p {
        position: relative;
        right: 30%;
    }

    iconContent_2 img {
        width: 400px;
        height: 250px;

        position: absolute;
        left: 25%;
        top: 145%;
        
    }
    
    iconContent_2 img:hover {
        transform: scale(1.1);
        transition: .3s;
    }
       
`


class AboutUs extends React.Component {
    render () {
        return (
            <Main>
                <h1>A <span>música</span> move o mundo</h1>
                <Container_1>
                    <img src="https://images.unsplash.com/photo-1525183480399-e8706926adac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="profissional mixando uma faixa de música" />

                    <iconContent_1><img src={icon_3} alt="icone de microfone" /></iconContent_1>

                    <p>O <span>Labefy</span> apoia artistas oferecendo ferramentas para criar, lançar e medir o alcance das músicas em todo o mundo. Descubra diversas maneiras de promover conteúdo no Labefy, como MusicKit, feeds RSS, widgets, diretrizes de marca, artes para ícones e mais.</p>

                </Container_1>

                <br/>

                <Container_2>
                    <img src="https://images.unsplash.com/photo-1557315360-6a350ab4eccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="mulher com headphones" />

                    <iconContent_2><img src={icon_2} alt="icone de microfone" /></iconContent_2>
                
                    <p>O <span>Labefy</span> é um serviço de streaming em que você pode ouvir mais de 90 milhões de músicas. Ele tem recursos incríveis para você baixar suas faixas favoritas e ouvir sem conexão, ver as letras em tempo real, escutar em todos os seus aparelhos, receber recomendações personalizadas de novas músicas, playlists feitas por nossos editores e muito mais. Além de tudo isso, você tem acesso a conteúdo original e exclusivo.</p>
                </Container_2>
            </Main>
        )
    }
}

export default AboutUs
