import React from "react";
import styled from "styled-components";
import labefy from "../../images/labefy.png"

const NavbarMenu = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin: auto;
    padding: 1em;

    background-color: black;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1em;
    
    img {
        width: 70px;
        color: white;
    }

    img:hover {
        cursor: pointer;
        animation: treme 0.2s;
        animation-iteration-count: 4;
    }

    @keyframes treme {
        0% {margin-left: 0;}
        25% {margin-left: 5px;}
        50% {margin-left: 0;}
        75% {margin-left: -5px;}
        100% {margin-left: 0;}
    }

    ul {
        display: flex;
        text-align: center;
        margin-left: 10em;
    }

    li {
        margin-right: 1em;
        text-decoration: none;
        list-style: none;
    }

    li:hover {
        cursor: pointer;
        color: #7AFFA2;
        transition: 0.5s;
    }
`

class Navbar extends React.Component {
    render () {
        return (
            <NavbarMenu>
                <img src={labefy} alt="logo labefy" />
                <nav>
                   <ul>
                       <li>Home</li>
                       <li>Playlists</li>
                       <li>Sobre nós</li>
                   </ul>
                </nav>
            </NavbarMenu>
        )
    }
}

export default Navbar
