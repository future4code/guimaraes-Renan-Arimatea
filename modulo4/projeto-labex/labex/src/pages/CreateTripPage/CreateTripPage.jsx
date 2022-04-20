import React from "react";
import useForm from "../../components/CustomHooks/UseForm"
import {useNavigate} from "react-router-dom"
import {CreateTrip}  from "../../components/Request/Request"
import {GoToHomePage} from "../../routes/RouteFunctions"
import useProtectedPage from "../../components/CustomHooks/UseProtectedPage"
import { CreateTripBtn, CreateTripContent, CreateTripSpace } from "./CreateTripPageStyled";


function CreateTripPage() {

//   useProtectedPage()

    const navigate = useNavigate()
    const { form, changeValues, clear } = useForm({ name: "", planet: "", date: "", description: "",        durationInDays: "" })

  const sendForm = (event) => {
    event.preventDefault()
    const mensagem = "Viagem criada com sucesso!"
    CreateTrip(form, mensagem)
    clear()
  }

  const minDate = () => {
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let dataAtual = dia + '/' + mes + '/' + ano;
    return dataAtual
  }

  const dataAtual = minDate()

  const planetes = ["Mercúrio", "Vênus", "Marte", "Jupiter", "Saturno", "Urano", "Netuno", "Europa", "Lua"]

  const planetsOptions = planetes.map((p) => {
    return <option value={p}>{p}</option>
  })
    return (
        <CreateTripContent>
            <h3>Criar Viagem</h3>
            <CreateTripSpace onSubmit={sendForm}>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={changeValues}
                    required
                    pattern={"^.{5,}$"}
                />

                <select
                    placeholder={"Planeta"}
                    name={"planet"}
                    defaultValue={""}
                    onChange={changeValues}
                    required
                >
                    <option value={""} disabled>Escolher Destino</option>
                    {planetsOptions}
                </select>

                <input
                    placeholder={"Data"}
                    type={"date"}
                    name={"date"}
                    value={form.date}
                    onChange={changeValues}
                    required
                    min={dataAtual}
                />

                <input
                    placeholder={"Descrição"}
                    name={"description"}
                    value={form.description}
                    onChange={changeValues}
                    required
                    pattern={"^.{30,}$"}
                />

                <input
                    placeholder={"Duração em dias"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={changeValues}
                    required
                    min={30}
                />
            </CreateTripSpace>
     
            <CreateTripBtn>
                <button onClick={() => navigate(-1)}>Voltar</button>
                <button type={"submit"}>Criar</button>
            </CreateTripBtn>
        </CreateTripContent>
    )
}

export default CreateTripPage
