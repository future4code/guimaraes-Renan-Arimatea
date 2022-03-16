import React from "react";
import axios from "axios";
import styled from "styled-components";

import EditPlaylist from "./EditPlaylist"


const urlTodasPlaylists = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

export const headers = {
    headers: {
        Authorization: 'renan-arimatea-guimaraes'
    }
}


const CardPlaylists = styled.div`

display: flex;
justify-content: space-between;
border: 1px solid #7AFFA2;
border-radius: 2em;
background-color: #000000;
margin: 1em;
padding: 1em;
width: 20em;
height: 3em;

:hover {
    cursor: pointer;
    color: #7AFFA2;
}

button {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1em;
    max-height: 1em;
    padding: 0.59em;
    margin-top: -.3em;
}
`

const PlaylistContent = styled.div`

h3 {
    padding: 1.5em;
}

h3 span {
    color: #7AFFA3;
    padding: 0 0.2em;
    background-color: #000000;
}

button {
        width: 10em;
        height: 2em;
        margin-left: 1em;
        border-radius: 2em;
        border: 1px solid #7AFFA2;

        background-color: black;
        color: #FFF; text-shadow: black 0.1em 0.1em 0.2em;
        font-size: 1.2em;
        font-weight: 600;
    }

    button:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: 0.5s;
        color: #7AFFA2;
    }
`

class ShowPlaylists extends React.Component {

    state = {

        nome: '',
        playlists: [],
        detalhe: false,
        playlistSelecionada: '',
    }

    renderizaDetalhe = (mostraPlaylist) => {
        this.setState({detalhe: true, playlistSelecionada:  mostraPlaylist})
    }

    renderizaPaginaPlaylist = () => {
        this.setState({detalhe: false})
    }

    componentDidMount() {
        this.pegaPlaylist()
    }

    componentDidUpdate() {
        this.pegaPlaylist()
    }

    pegaNomePlaylist = (e) => {
        this.setState({ nome: e.target.value })

    }

    pegaPlaylist = () => {

        axios
            .get(urlTodasPlaylists, headers)

            .then((res) => {
                this.setState({playlists: res.data.result.list})
            })

            .catch((err) => {
                console.log('Algo deu errado!');
            })

    }

    deletaPlaylist = (idPlaylist) => {

        axios

            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`,
                headers)

            .then((res) => console.log(res))

            .catch((err) => console.log(err.response))
    }


    render() {
        if (this.state.detalhe) {

            return (
                
                <EditPlaylist
                    renderizaPaginaPlaylist={this.renderizaPaginaPlaylist}

                    playlistSelecionada={this.state.playlistSelecionada}
                />
            )
          }


        const AllPlaylists = this.state.playlists.map((playlist, i) => {

            return (
                <CardPlaylists>
                    <div key={playlist.id} onClick={() => this.renderizaDetalhe(playlist)}>
                        {playlist.name}
                    </div>

                    <button onClick={() => {if(window.confirm('Deseja deletar esta playlist?')) {this.deletaPlaylist(playlist.id)}}}>x</button>
                </CardPlaylists>
            )
        })


        return (
            <PlaylistContent>
                   <h3>Minhas <span>playlists</span></h3>

                    {AllPlaylists}

                    <button onClick={this.props.irParaCadastro}>+ Adicionar</button>
                </PlaylistContent> 
        )
    }
}

export default ShowPlaylists
