import React from "react";
import styled from "styled-components";
import axios from "axios";
import CreatePlaylist from "../form/CreatePlaylist";
import ShowPlaylists from "../form/ShowPlaylists";

const PlaylistContent = styled.div`

background-image: url("https://images.unsplash.com/photo-1504509546545-e000b4a62425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");

display: flex;
flex-direction: column;
align-items: center;
text-align: center;

padding: 5em 4em;
width: 100%;
min-height: 100vh;

font-family: Verdana, Geneva, Tahoma, sans-serif;
background-color: #000000;
color: #FFF;

`

class Playlists extends React.Component {

    state = {
        tela: "cadastro"
    }

    escolheTela = () => {

        switch(this.state.tela) {

            case "cadastro":
                return <CreatePlaylist irParaLista={this.irParaLista}/>

            case "lista":
                return <ShowPlaylists irParaCadastro={this.irParaCadastro}/>

            default:
              return <p>Ops, algo deu errado...</p> 
        }
    }

    irParaCadastro = () => {
        this.setState({tela: "cadastro"})
    }

    irParaLista = () => {
        this.setState({tela: "lista"})
    }

    render () {
        return (
            <PlaylistContent>
               {this.escolheTela()}
            </PlaylistContent>
        )
    }
}

export default Playlists
