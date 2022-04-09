import React from "react";
import logo from "../../assets/Labex.png"
import {NavbarMenu} from "./HeaderMenuStyled"
import { Link } from "react-router-dom";

const HeaderMenu = () => {
    return  (
        <NavbarMenu>
            <Link to="/"><img src={logo} alt="Logo LabeX" /></Link>
            
            <nav>
                <Link to="/">HOME</Link>
                <p>|</p>
                <Link href="/trips/list">VIAGENS</Link>
                <p>|</p>
                <Link to="/login">LOGIN</Link>
            </nav>
            
        </NavbarMenu>
    )
}

export default HeaderMenu
