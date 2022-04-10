import React from "react";
import { InfoBox, ListTripsContent, SearchContent } from "./ListTripsPageStyled";


function ListTripsPage() {
    return (
        <ListTripsContent>
           <SearchContent>
               <input type="text" id="txtBusca" placeholder="Buscar..."/>
               <button id="BtnBusca">Buscar</button>
           </SearchContent>

           <InfoBox>
                <div>
                    <h3>Colônia Lunar</h3>
                    <p>01/10/2022 - 30/10/2022 (30 dias)</p>
                    <button>Saiba +</button>
                </div>
                <div>
                    <h3>Colônia Marte</h3>
                    <p>01/11/2022 - 16/12/2022 (45 dias)</p>
                    <button>Saiba +</button>
                </div>
                <div>
                    <h3>Colônia Europa</h3>
                    <p>10/02/2023 - 10/05/2023 (150 dias)</p>
                    <button>Saiba +</button>
                </div>
                <div>
                    <h3>Colônia Saturno</h3>
                    <p>15/06/2023 - 15/12/2023 (183 dias)</p>
                    <button>Saiba +</button>
                </div>
           </InfoBox>
        </ListTripsContent>
    )
}

export default ListTripsPage
