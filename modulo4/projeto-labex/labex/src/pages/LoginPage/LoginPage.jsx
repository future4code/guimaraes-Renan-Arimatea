import React from "react";
import { LoginBtn, LoginContent, LoginSpace } from "./LoginPageStyled";


function LoginPage() {
    return (
        <LoginContent>
            <h3>Login</h3>
            <LoginSpace>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
            </LoginSpace>

            <LoginBtn>
                <button>Voltar</button>
                <button>Entrar</button>
            </LoginBtn>
        </LoginContent>
    )
}

export default LoginPage
