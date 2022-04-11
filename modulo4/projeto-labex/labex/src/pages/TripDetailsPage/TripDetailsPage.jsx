import React from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useRequestData2 } from "../../components/CustomHooks/UseRequestData";
import { URL_BASE } from "../../components/Request/UrlBase";
import { GoToHomePage, GoToAdminHomePage } from "../../routes/RouteFunctions"
import useProtectedPage from "../../components/CustomHooks/UseProtectedPage";
import { DecideCandidate } from "../../components/Request/Request"

import { CandidatesPending, ListCandidates, TripBox, TripBtn, TripDetailsContent, TripValor } from "./TripDetailsPageStyled";



function TripDetailsPage() {



    const navigate = useNavigate()
    const url = URL_BASE
    const { id } = useParams()
    const [tripList, loadingTripList, errorTripList, GetTrips2] = useRequestData2(url + `/trip/` + id, {})

    const reject = (candidateId) => {
        const mensagem = "Candidato reprovado!"

        const body = {
            "approve": false
        }
        DecideCandidate(body, tripList.trip.id, candidateId, GetTrips2, mensagem)
    }

    const aproove = (candidateId) => {
        const mensagem = "Candidato aprovado!"

        const body = {
            "approve": true
        }
        DecideCandidate(body, tripList.trip.id, candidateId, GetTrips2, mensagem)
    }

    const candidatos = () => {
        const candidates = tripList && tripList.trip && tripList.trip.candidates.map((trip) => {
            return (
                <ListCandidates>
                    <CandidatesPending>
                        <p key={trip.id} ><b>Nome:</b> {trip.name}</p>
                        <p><b>Profissão:</b> {trip.profession}</p>
                        <p><b>Idade:</b> {trip.age}</p>
                        <p><b>País:</b> {trip.country}</p>
                        <p><b>Texto de Aplicação:</b> {trip.applicationText}</p>
                        <TripBtn>
                            <button onClick={() => aproove(trip.id, trip.length, candidatos)}>Aprovar</button>
                            <button onClick={() => reject(trip.id, trip.length, candidatos)}>Rejeitar</button>
                        </TripBtn>
                    </CandidatesPending>
                </ListCandidates>
            )
    })
    return candidates
    }

  const approvCandidates = tripList && tripList.trip.approved && tripList.trip.approved.map((trip) => {
    return (
      <ul>
        <li>
          <p key={trip.id} >Nome: {trip.name}</p>
          <p>Idade: {trip.age}</p>
          <p>País: {trip.country}</p>
        </li>
      </ul>
    )
  })

    return (
        <TripDetailsContent>
            {loadingTripList && <p>Carregando...</p>}
            {!loadingTripList && errorTripList && <p>Ocorreu um erro</p>}
            {tripList && tripList.trip && <h1>{tripList.trip.name}</h1>}
            {tripList && tripList.trip && <div>
                <p><b>Descrição:</b> {tripList.trip.description}</p>
                <p><b>Planeta:</b> {tripList.trip.planet}</p>
                <p><b>Duração:</b> {tripList.trip.durationInDays}</p>
                <p><b>Data:</b> {tripList.trip.date}</p>
            </div>}

            {tripList && (tripList.trip.candidates.length > 0) && <h3>Candidatos</h3>}

            {tripList && (tripList.trip.candidates) && candidatos()}
            {candidatos()}

            {tripList && tripList.trip.approved.length > 0 && <h3>Candidatos Aprovados</h3>}
            {approvCandidates}
            <TripBtn>
                <button onClick={() => GoToHomePage(navigate)}>Home</button>
                <button onClick={() => GoToAdminHomePage(navigate)}>voltar</button>
            </TripBtn>
        </TripDetailsContent>
    )
}

export default TripDetailsPage
