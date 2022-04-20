import styled from "styled-components";

export const TripDetailsContent = styled.div`

    background-color: #000;
    background-image: url(/img/Europa.png);
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    height: 100vh;
    
    font-family: 'Gruppo', cursive;
    color: #FFF;
`

export const TripBox =  styled.div`

    background-color: rgba(0, 0, 0, 0.8);

    width: 50%;
    height: 65vh;

    margin: auto;
    padding: 2em;

    border-radius: 1em;

    h2 {
       font-size: 3em;
       text-align: center;
       color: #7CB342;
    }

    h3 {
        font-size: 1.5em;
        text-align: center;
    }

    p {
        font-size: 1.1em;
        line-height: 1.2em;
        text-align: justify;
    }

    p > span {
        color: #7CB342;
    }
`

export const TripBtn = styled.div`

    button {
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
            color: #FFF;
            background-color: #000;
        }
    }
`

export const ListCandidates = styled.div`

    background-color: rgba(0, 0, 0, 0.8);

    width: 50%;
    height: 65vh;

    margin: auto;
    padding: 2em;

    border-radius: 1em;

`

export const CandidatesPending = styled.div`

    background-color: rgba(0, 0, 0, 0.8);

    width: 25%;
    height: 20vh;

    margin: auto;
    padding: 2em;

    text-align: center;
    border-radius: 1em;

    p {
        font-size: 1.4em;
        text-align: center;
        
    }

    b {
        color: #7CB342;
    }
`