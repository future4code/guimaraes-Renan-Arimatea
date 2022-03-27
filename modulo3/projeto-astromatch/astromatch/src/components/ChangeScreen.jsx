import { Home } from "../Pages/Home";
import MatchesList from "./MatchesList";
import { useState } from "react";


export const ChangeScreen = (props) => {
  const [telaAtual, setTelaAtual] = useState("inicial");

  const changeToInitial = () => {
    setTelaAtual("inicial")
  }

  const changeToMatches = () => {
    setTelaAtual("matches")
  }

  switch (telaAtual) {
    case "inicial":
      return (
        <Home
          changeToMatches={changeToMatches}
          changeToInitial={changeToInitial}
        />
      )

    case "matches":
      return (
        <MatchesList
          changeToInitial={changeToInitial}
          setMatches={props.setMatches}
          matches={props.matches}
        />
      )

    default:
      return (
        <Home
          changeToInitial={changeToInitial}
          changeToMatches={changeToMatches}
          
        />
      )
  }
}
