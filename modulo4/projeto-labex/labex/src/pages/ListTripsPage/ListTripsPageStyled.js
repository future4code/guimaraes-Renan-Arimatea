import styled from "styled-components";


export const ListTripsContent = styled.div`

    background-image: url(/img/TripsPage.png);
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    height: 100vh;
    width: 100%;

    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #FFF;
`


export const SearchContent = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2em;
    
    input {
        
        background-color: rgba(0, 0, 0, 0.8);
        color: #FFF;

        padding-left: 1em;
        font-size: 1em;

        border: none;
        height: 2em;
        width: 20em;

        :focus {
            border: none;
        }

    }

    button {
        background-color: #008037;
        color: #FFF;

        border: none;
        border-radius: 0 5px 5px 0;
        
        height: 2.63em;
        width: 5em;
        
        font-weight: bold;
        
        :hover {
            cursor: pointer;
        }
    }
`

export const InfoBox = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;

    height: 30em;
    width: 80%;
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
