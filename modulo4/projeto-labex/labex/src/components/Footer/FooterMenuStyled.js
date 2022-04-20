import styled from "styled-components"

export const Footercontainer = styled.div`
    background-color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #FFF;
    padding: 3em;
    text-align: center; 
    
ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
}
li {
    font-size: 0.8em;
    margin: 1em 1em 2em 2em;
    cursor: pointer;
}
ul {
    text-decoration: none;
    list-style: none;
}
svg {
    font-size: 2em;
    cursor: pointer;
    color: #FFF;
}
svg:hover {
    color: #7CB342;
    transition: 0.5s;
    transform: scale(1.1);
}
p {
    font-size: 0.9em;
    margin-top: 1.2em;
}
span {
    font-weight: bold;
    color: #7CB342;
}
`
