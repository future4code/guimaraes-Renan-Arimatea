import React from "react";
import { TripBox, TripDetailsContent, TripValor } from "./TripDetailsPageStyled";


function TripDetailsPageSaturno() {
    return (
        <TripDetailsContent>
           <TripBox>
               <h2>Colônia Saturno</h2>
               <h3>Detalhes da Viagem</h3>
               <p>
                   <span>Detalhes: </span>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora cumque, blanditiis iste fugiat temporibus voluptas aperiam alias consequatur corporis magnam possimus ad odio ullam doloremque eligendi ducimus eos molestias excepturi.
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium recusandae suscipit vero, magni, modi possimus corporis expedita quibusdam, impedit amet hic molestiae aliquam architecto optio dolorum nostrum? Cum, enim aperiam!
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem aperiam dolore magni atque cupiditate ab eligendi laudantium, accusantium quis corrupti quas debitis nam. Doloribus optio perferendis autem ad distinctio.
               </p>
               <p><span>Planeta: </span>Saturno</p>
               <p><span>Data de Ínicio: </span>15/06/2023</p>
               <p><span>Duração: </span>183 dias</p>
           </TripBox>

           <TripValor>
               <h3>Valor</h3>
               <p><span>$ 850.000,00</span></p>
               <button>Candidatar</button>
           </TripValor>
        </TripDetailsContent>
    )
}

export default TripDetailsPageSaturno
