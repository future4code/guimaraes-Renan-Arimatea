import styled from "styled-components";

export const LoginContent = styled.div`

    background-image: url(/img/Login.png);
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    
    display: flex;
    flex-direction: column;

    text-align: center;

    padding: 2em;
    margin: auto;

    height: 100vh;

    font-family: 'Gruppo', cursive;
    color: #FFF;

    h3 {
        font-size: 3em;
        color: #7CB342;
    }
`

export const LoginSpace = styled.div`

    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 20vh;
    width: 30%;

    margin: 0 auto;
    border-radius: 1em 1em 0 0;

    input {
        background-color: #000;
        color: #FFF;

        width: 25em;
        padding: .5em;
        margin: .5em;

        border: 1px solid #FFF;
        border-radius: .5em;
    }
`

export const LoginBtn = styled.div`

    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 10vh;
    width: 30%;

    margin: 0 auto;
    border-radius: 0 0 1em 1em;

    button {
        font-size: 1.1em;
        padding: .2em .8em;
        margin: 1em;

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