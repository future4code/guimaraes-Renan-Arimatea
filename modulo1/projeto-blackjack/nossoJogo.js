console.log("Boas vindas ao jogo de Blackjack!")

const iniciarJogo = () => {

   let minhaCarta01 = comprarCarta()
   let minhaCarta02 = comprarCarta()

   let cartaMaquina01 = comprarCarta()
   let cartaMaquina02  = comprarCarta()

   let pontosDoUsuario = minhaCarta01.valor + minhaCarta02.valor
   let pontosDaMaquina = cartaMaquina01.valor + cartaMaquina02.valor

   console.log("Jogador - cartas: ", minhaCarta01.texto, minhaCarta02.texto, "=", pontosDoUsuario)
   console.log("Máquina - cartas: ", cartaMaquina01.texto, cartaMaquina02.texto, "=", pontosDaMaquina)

   if (pontosDoUsuario > pontosDaMaquina) {

      console.log("O Jogador venceu a partida!")
   
   } else if (pontosDoUsuario < pontosDaMaquina) {

      console.log("A máquina venceu a partida!")

   } else if (pontosDoUsuario === pontosDaMaquina) {

      console.log("A partida empatou!")
   
   }
   else {

      console.log("Partida Indefinida!")
   }

}

const iraJogar = confirm("Você quer iniciar uma nova rodada?")

if (iraJogar == true) {

   iniciarJogo()

} else {

   console.log("Fim da partida! Nos vemos na próxima!")

}
