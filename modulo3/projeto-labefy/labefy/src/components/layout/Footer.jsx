import React from "react";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import styled from "styled-components";


const Footercontainer = styled.div`

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


svg {
    font-size: 2em;
    cursor: pointer;
}

svg:hover {
    color: #7AFFA2;
    transition: 0.5s;
    transform: scale(1.1);
}

p {
    font-size: 0.9em;
    margin-top: 1.2em;
}

span {
    font-weight: bold;
    color: #7AFFA2;
}

`

class Footer extends React.Component {
    render () {
        return (
            
        <Footercontainer className="footer">
                <ul className="social-list">
                    <li>
                        <FaFacebook/>
                    </li>

                    <li>
                        <FaInstagram/>
                    </li>

                    <li>
                        <FaLinkedin/>
                    </li>

                    <li>
                        <FaTwitter/>
                    </li>
                </ul>

                <ul className="informations-list">
                    <li>Sobre o Labefy</li>
                    <li>Aviso de Privacidade</li>
                    <li>Termos de Uso</li>
                    <li>Docs</li>
                    <li>API</li>
                    <li>Parcerias</li>
                    <li>Cookies</li>
                    <li>Blog</li>
                    <li>Dúvidas</li>
                    <li>Trabalhe Conosco</li>
                    <li>Contato</li>
                </ul>

            <p className="copy_rigth"><span>Labefy</span> &copy; 2022 - Todos os direitos reservados.</p>
        </Footercontainer>
            
        )
    }
}

export default Footer
