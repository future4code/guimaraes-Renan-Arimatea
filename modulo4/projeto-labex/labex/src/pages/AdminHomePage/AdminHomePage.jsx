import React from "react";
import useProtectedPage from "../../components/CustomHooks/UseProtectedPage"
import {useNavigate} from "react-router-dom"
import  {useRequestData} from "../../components/CustomHooks/UseRequestData"
import {URL_BASE} from "../../components/Request/UrlBase"
import { GoToHomePage, GoToLoginPage, GoToTripDetailsPage, GoToCreateTripPage } from "../../routes/RouteFunctions"
import {DeleteTrip} from "../../components/Request/Request"
import { AdminHomeBox, AdminHomeBtn, AdminHomeBtn2, AdminHomeContent } from "./AdminHomePageStyled";

function AdminHomePage() {

    // useProtectedPage()

   const navigate = useNavigate()

   const [tripList, loadingTripList, errorTripList, GetTrips] = useRequestData(`${URL_BASE}/trips`, {})

   const delTrip = (tripId) => {
       const mensagem = "Viagem excluída com sucesso!"
       DeleteTrip(tripId, GetTrips, mensagem)
   }

   const logOut = (navigate) => {
       localStorage.removeItem("token")
       GoToLoginPage(navigate)
   }

   const list = tripList && tripList.map((trip) => {
    return (
        <div>
            <p key={trip.id} onClick={() => GoToTripDetailsPage(navigate, trip.id)}>Nome: {trip.name}</p>
            <button onClick={() => delTrip(trip.id)}>X</button>
        </div>
    )
  })

    return (
        <AdminHomeContent>
            <h2>Dashboard</h2>
            <AdminHomeBtn>
                <button onClick={() => GoToCreateTripPage(navigate)}>Criar Viagem</button>
                <button onClick={() => logOut(navigate)}>Logout</button>
            </AdminHomeBtn>
            <AdminHomeBox>
                <h3>Viagens:</h3>
                {loadingTripList && <p>Carregando...</p>}
                {!loadingTripList && errorTripList && <p>Ocorreu um erro</p>}
                {!loadingTripList && tripList && tripList.length === 0 && (
                    <p>Não há viagens</p>
                )}
                {list}
            </AdminHomeBox>

            <AdminHomeBtn2>
                <button onClick={() => GoToHomePage(navigate)}>Voltar</button>
            </AdminHomeBtn2>
           
        </AdminHomeContent>
    )
}

export default AdminHomePage
