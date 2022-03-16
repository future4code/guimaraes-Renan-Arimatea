import React from "react";
import axios from "axios";
import styled from "styled-components";


const PlaylistMain = styled.div`

    h3 {
        font-size: 2em;
        background-color: #000000;
    }

    h3 span {
        color: #7AFFA2;
    }

    p {
        margin-top: 2em;
        font-size: 1.2em;
        padding: 1em;
        background-color: #000000;
    }

    p span {
        color: #7AFFA2;
    }

    input {
        width: 20em;
        height: 2em;
        border-radius: 2em;
        margin-top: 4em;
        border: 1px solid #7AFFA2;
        text-align: center;

        background-color: black;
        color: #FFF;
        font-size: 1.2em;
        font-weight: 600;
    }

    input::placeholder {
        font-size: 0.8em;
        text-align: center;
    }

    input:focus {
        border: 1px solid #FFF;
    }

    button {
        width: 10em;
        height: 2em;
        margin-top: 2em;
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

class CreatePlaylist extends React.Component {

    state = {
        playlist: "",
    }

    handlePlaylist = (event) => {
        this.setState({playlist: event.target.value})
    }

    criaPlaylist = () => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const body = {
            name: this.state.playlist,
        }

        const headers = {
            headers: {
                Authorization: "renan-arimatea-guimaraes"
            }
        }

        axios.post(url, body, headers)

        .then((res) => {
            alert("Playlist criada com sucesso")
            this.setState({playlist: ""})
        })

        .catch((err) => {
            alert(err.response.data.message)
        })

    }

    render () {
        return (
            <PlaylistMain>
                
                <div className="playlist_container">

                    <h3>Comece criando as suas <span>playlists</span></h3>

                    <input
                        placeholder="Nome da Playlist..."
                        value={this.state.playlist}
                        onChange={this.handlePlaylist}
                    />

                    <button onClick={this.criaPlaylist}>Criar Playlist</button>
                </div>

                <p>Você também pode <span>acessar</span> as playlists já criadas</p>

                <button onClick={this.props.irParaLista}>Minhas Playlists</button>
            </PlaylistMain>
            
        )
    }
}

export default CreatePlaylist
