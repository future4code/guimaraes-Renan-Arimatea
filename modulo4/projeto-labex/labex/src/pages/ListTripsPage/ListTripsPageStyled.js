import styled from "styled-components";


export const ListTripsContent = styled.div`

    background-color: #000;
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

    font-family: 'Gruppo', cursive;
    color: #FFF;

    h3 {
        font-size: 3em;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 0 1em;
    }
`


export const SearchContent = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;
    
    button {
        background-color: #008037;
        color: #FFF;

        border: 1px solid #008037;
        border-radius: .3em;
        
        height: 2.63em;
        width: 10em;
        
        font-size: 1.2em;
        font-weight: bold;

        font-family: 'Gruppo', cursive;
        
        :hover {
            cursor: pointer;
            transform: scale(1.1);
            transition: .3s;
            color: #FFF;
            background-color: #000;
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

    div a {
        font-size: 1.1em;
        font-weight: 600;
        padding: .2em .8em;

        background-color: #008037;
        color: #FFF;
        text-decoration: none;

        border: 1px solid #008037;
        border-radius: .3em;

        :hover {
            cursor: pointer;
            transform: scale(1.1);
            transition: .3s;
            color: #FFF;
            background-color: #000;
        }
    }
`
