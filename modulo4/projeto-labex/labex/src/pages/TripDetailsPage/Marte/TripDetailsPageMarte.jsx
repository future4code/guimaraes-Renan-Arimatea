import React from "react";
import { TripBox, TripDetailsContent, TripValor } from "./TripDetailsPageStyled";
import { useNavigate } from "react-router-dom"
import { GoToApplicationPage } from "../../../routes/RouteFunctions";


function TripDetailsPageMarte() {

    const navigate = useNavigate()

    return (
        <TripDetailsContent>
           <TripBox>
               <h2>Colônia Marte</h2>
               <h3>Detalhes da Viagem</h3>
               <p>
                   <span>Detalhes: </span>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora cumque, blanditiis iste fugiat temporibus voluptas aperiam alias consequatur corporis magnam possimus ad odio ullam doloremque eligendi ducimus eos molestias excepturi.
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium recusandae suscipit vero, magni, modi possimus corporis expedita quibusdam, impedit amet hic molestiae aliquam architecto optio dolorum nostrum? Cum, enim aperiam!
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem aperiam dolore magni atque cupiditate ab eligendi laudantium, accusantium quis corrupti quas debitis nam. Doloribus optio perferendis autem ad distinctio.
               </p>
               <p><span>Planeta: </span>Marte</p>
               <p><span>Data de Ínicio: </span> 01/11/2022</p>
               <p><span>Duração: </span>45 dias</p>
           </TripBox>

           <TripValor>
               <h3>Valor</h3>
               <p><span>$ 250.000,00</span></p>
               <button onClick={() => GoToApplicationPage(navigate)}>Candidatar-se</button>
           </TripValor>
        </TripDetailsContent>
    )
}

export default TripDetailsPageMarte
