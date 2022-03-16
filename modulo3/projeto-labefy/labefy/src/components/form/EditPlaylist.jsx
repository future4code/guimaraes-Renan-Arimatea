import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ReactAudioPlayer from 'react-audio-player'



const headers = {
    headers: {
        Authorization: 'renan-arimatea-guimaraes'
    }
}

const MusicContainer = styled.div`

    display: flex;
    flex-direction: column;
    width: max-content;
    height: max-content;

    border: 1px solid #7AFFA2;
    margin: 1em;
    padding: 1em;
    font-size: 1em;
    background-color: #000000;
    

    button {
        width: 10em;
        height: 2em;
        margin: auto;
        
        border-radius: 2em;
        border: 1px solid #7AFFA2;

        background-color: black;
        color: #FFF; 
        text-shadow: black 0.1em 0.1em 0.2em;
        font-size: .9em;
    }

    button:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: 0.5s;
        color: #7AFFA2;
    }

    input {
        width: 20em;
        height: 2em;
        border-radius: 2em;
        margin-top: .3em;
        border: 1px solid #7AFFA2;
        text-align: center;

        background-color: black;
        color: #FFF;
        font-size: 1em;
        font-weight: 500;
    }

    input::placeholder {
        font-size: 0.8em;
        text-align: center;
    }

    input:focus {
        border: 1px solid #FFF;
        font-size: 1em;
    }
`

const MusicCard = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: max-content;
    height: auto;
    
    margin: auto;
    padding: 0.5em;
    border-bottom: 1px solid #7AFFA2;

    font-size: 1em;
    font-weight: 500;
    background-color: #000000;
    

    p {
        padding: 0 1em;
        margin: auto;
        font-size: .8em;
        text-align: justify;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 1em;
        max-height: 1em;
        padding: 0.59em;
    }

    button:hover {
        cursor: pointer;
        color: red;
        border: 1px solid red
    }

    audio {
        width: 2vw;
        height: 1em;
        margin: 0 .3em;
    }
`

const PlaylistDiv = styled.div`
   margin-bottom: 1em;
    
`


 class EditPlaylist extends React.Component {

    state = {

        showPlaylist: [],
        name: '', 
        artist: '',
        url: '',
    }  
    
    pegaNomeMusica = (e) => {
        this.setState({name: e.target.value})

    }
    pegaArtistaMusica = (e) => {
        this.setState({artist: e.target.value})

    }
    pegaUrlMusica = (e) => {
        this.setState({url: e.target.value})

    }
    
    abrePlaylist = () => {

        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistSelecionada.id}/tracks`, headers)

            .then((res) => {
                this.setState({showPlaylist: res.data.result.tracks})
            })

            .catch((err) => { })

    }

    criaMusica = () => {

        const body = {

            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url,
        }

    
    axios

    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistSelecionada.id}/tracks`, body, headers)

    .then((res) => {
        this.setState({ name: '', artist: '', url: '' });

        this.abrePlaylist();
      })

      .catch((err) => {
        console.log(err);
      })
    }
    
    componentDidMount () {
        this.abrePlaylist()
    }

    componentDidUpdate () {
        this.abrePlaylist()
    }

    deletaMusica = (musica) => {

        axios

        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistSelecionada.id}/tracks/${musica}`, headers)

        .then((res) => console.log(musica))

        .catch((err) => console.log(musica))
    }


  render() {

    const playlistRenderizada = this.state.showPlaylist.map((musica, i) => {

        return (

            <MusicCard key={musica.id}>

                <p>{musica.name}</p>

                <p>{musica.artist}</p>

                <audio src={musica.url} ref="audio_tag" controls></audio>
                

                <button onClick={() => {if(window.confirm('Deletar Música?')) {this.deletaMusica(musica.id)}}}> x </button>

            </MusicCard>
        )
    })


    return (

      <MusicContainer>
           
               <input
                    type="text"
                    placeholder="Nome da Música"
                    value={this.state.name}
                    onChange={this.pegaNomeMusica} 
                />

                <input
                    type="text"
                    placeholder="Nome do Artista"
                    value={this.state.artist}
                    onChange={this.pegaArtistaMusica} 
                />
               
                <input
                    type="text"
                    placeholder="Url"
                    value={this.state.url}
                    onChange={this.pegaUrlMusica} 
                />

                <br/>
          

            <button onClick={this.criaMusica}>Adicionar Música</button>

            <br/>

            <PlaylistDiv>{playlistRenderizada}</PlaylistDiv>

        
            <button onClick={this.props.renderizaPaginaPlaylist}>Voltar</button>
          
        </MusicContainer>
    )
  }
}

export default EditPlaylist
