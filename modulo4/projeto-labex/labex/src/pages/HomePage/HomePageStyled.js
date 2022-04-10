import styled from "styled-components";
import "../../index.css"

export const HomePageMain = styled.div`

    margin: auto;
    
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #FFF;
`

export const HomePageBg = styled.div`

    position: absolute;
    top: 0;
`

export const VideoBg = styled.video`

    position: fixed;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
`

export const  ContentBox = styled.div`
    
    display: flex;
    flex-direction: row;
    min-height: 85vh;
    
    h1 {
        padding: 0 1em;
        font-size: 5em;
        line-height: 1.4em;
    }

    h1 span {
        background-color: rgba(0, 0, 0, 0.8);
        color: #7CB342;
        padding: .13em ;
    }
`

export const InfoBox = styled.div`
    
    max-height: 35em;
    width: 100vw;
    margin: 2em;
    background-color: rgba(0, 0, 0, 0.4);    

    h2 {
        font-size: 2.5em;
        text-align: center;
    }

    div {
        background-color: #000;
        border: 10px solid #7CB342;
        border-radius: 2em;

        font-family: 'Gruppo', cursive;

        width: 60%;
        margin: auto;
        padding: 1em;
        text-align: center;

        :hover {
            transform: scale(1.1);
            transition: .5s;
        }
    }

    div h3 {
        font-size: 2em;
        margin: .3em;
    }

    div p {
        font-size: 1.3em;
        color: #7CB342;
    }

    div button {
        font-size: 1.1em;
        padding: .2em .8em;

        background-color: #008037;
        color: #FFF;

        border: 1px solid #008037;
        border-radius: .3em;

        :hover {
            cursor: pointer;
            transform: scale(1.1);
            transition: .3s;
        }
    }
`

export const VideoContent = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    h2 {
        font-size: 2.5em;
        text-align: center;
    }

    h2 span {
        background-color: rgba(0, 0, 0, 0.8);
        color: #7CB342;
        padding: .13em ;
    }

`

export const VideoDescription = styled.div`

    width: 75%;
    background-color: rgba(0, 0, 0, 0.8);

    margin: 2em;
    padding: 1em;

    span {
        font-family: 'Gruppo', cursive;
        font-size: 1.5em;
        color: #7CB342;
    }

    p {
        font-family: 'Gruppo', cursive;
        font-size: 1.3em;
        line-height: 1.5em;
        text-align: justify;
    }

    p > span {
        font-size: 1.1em;
        color: #7CB342;
    }
`
