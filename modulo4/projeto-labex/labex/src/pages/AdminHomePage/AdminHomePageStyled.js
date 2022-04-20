import styled from "styled-components";

export const AdminHomeContent = styled.div`

    background-color: #000;
    background-image: url(/img/CreateTrip.png);
    background-position: top;
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

    h2 {
        font-size: 3em;
    }
    
    h3 {
        font-size: 1.5em;
        color: #7CB342;
    }

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

export const AdminHomeBtn = styled.div`

    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 10vh;
    width: 30%;

    margin: 0 auto;
    border-radius: 1em;

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
            color: #FFF;
            background-color: #000;
        }
    }
`

export const AdminHomeBtn2 = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 10vh;
    width: 30%;

    margin: 0 auto;
    border-radius: 1em;

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
            color: #FFF;
            background-color: #000;
        }
    }
`

export const AdminHomeBox = styled.div`

    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 50vh;
    width: 30%;

    margin: 1em auto;
    border-radius: 1em ;
`