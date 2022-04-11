import React from "react";
import { InfoBox, ListTripsContent, SearchContent } from "./ListTripsPageStyled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { GoToApplicationPage } from "../../routes/RouteFunctions";


function ListTripsPage() {

    const navigate = useNavigate()

    return (
        <ListTripsContent>
            <h3>Próximas Viagens</h3>
           <InfoBox>
                <div>
                    <h3>Colônia Lunar</h3>
                    <p>01/10/2022 - 30/10/2022 (30 dias)</p>
                    <Link to="/tripspage/lua">Saiba +</Link>
                </div>
                <div>
                    <h3>Colônia Marte</h3>
                    <p>01/11/2022 - 16/12/2022 (45 dias)</p>
                    <Link to="/tripspage/marte">Saiba +</Link>
                </div>
                <div>
                    <h3>Colônia Europa</h3>
                    <p>10/02/2023 - 10/05/2023 (150 dias)</p>
                    <Link to="/tripspage/europa">Saiba +</Link>
                </div>
                <div>
                    <h3>Colônia Saturno</h3>
                    <p>15/06/2023 - 15/12/2023 (183 dias)</p>
                    <Link to="/tripspage/saturno">Saiba +</Link>
                </div>
           </InfoBox>
           <SearchContent>
               <button onClick={() => GoToApplicationPage(navigate)}>Candidatar-se</button>
           </SearchContent>
        </ListTripsContent>
    )
}

export default ListTripsPage
