import React from "react";
import { LoginBtn, LoginContent, LoginSpace } from "./LoginPageStyled";
import {Login} from "../../components/Request/Request"
import useForm from "../../components/CustomHooks/UseForm"
import { useNavigate } from "react-router-dom"
import UseUnprotectedPage from "../../components/CustomHooks/UseUnprotectedPage";
import {GoToHomePage} from "../../routes/RouteFunctions"


function LoginPage() {

    UseUnprotectedPage()

    const navigate = useNavigate()
    const { form, changeValues } = useForm({ email: "", password: "" })

    const sendForm = (event) => {
        console.log(form)
        event.preventDefault()
        Login(form, navigate)
    }

    return (
        <LoginContent>
            <h3>Login</h3>
            <LoginSpace onSubmit={sendForm}>
                <input 
                    placeholder={"Email"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={changeValues}
                    required 
                />

                <input 
                    placeholder={"Senha"}
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={changeValues}
                    required
                />
            </LoginSpace>

            <LoginBtn>
                <button onClick={() => GoToHomePage(navigate)}>Voltar</button>
                <button type={"submit"}>Entrar</button>
            </LoginBtn>
        </LoginContent>
    )
}

export default LoginPage
