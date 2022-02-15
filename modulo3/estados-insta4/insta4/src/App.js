import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post2 from './components/Post/Post2'
import Post3 from './components/Post/Post3'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const ConteudoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 180px;
  width: 240px;
  border: 1px solid gray;
  margin: 20px;
  padding: 30px;
`

const listaDePosts  = [
  {
    nomeUsuario: 'paulinha@steves_official',
    fotoUsuario: 'https://picsum.photos/id/338/50/50',
    fotoPost: 'https://picsum.photos/id/449/200/150'
  },

  {
    nomeUsuario: '_Maykon_souza',
    fotoUsuario: 'https://picsum.photos/id/237/50/50',
    fotoPost: 'https://picsum.photos/id/453/200/150'
  },

  {
    nomeUsuario: 'fer_m@yer',
    fotoUsuario: 'https://picsum.photos/id/446/50/50',
    fotoPost: 'https://picsum.photos/id/1005/200/150'
  }
]

class App extends React.Component {

  state = {
    posts: listaDePosts,
    nomeUsuario: "",
    fotousuario: "",
    fotoPost: ""
  }

  alterarNomeDoUsuario = (event) => {
    this.setState({nomeUsuario: event.target.value})
  }

  alterarFotoDoUsuario = (event) => {
    this.setState({fotoUsuario: event.target.value})
  }

  alterarPostDoUsuario = (event) => {
    this.setState({fotoPost: event.target.value})
  }

  adicionarNovaPostagem = () => {
    const novaPostagem = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost
    }

    this.setState ({
      posts: [...this.state.posts, novaPostagem],
      nomeUsuario: "",
      fotoUsuario: "",
      fotoPost: ""
    })

  }

  render() {

    const componentesPost = this.state.posts.map((p) => {
      return(
        <Post
        nomeUsuario={p.nomeUsuario}
        fotoUsuario={p.fotoUsuario}
        fotoPost={p.fotoPost}
        />
      )
    })

    return (
      <MainContainer>
        <ConteudoContainer>
          <input
            placeholder={"Nome do Usuário"}
            value={this.state.nomePerfil}
            onChange={this.trocaNomePerfil}
          />
          <input
            placeholder={"Foto do Usuário"}
            value={this.state.fotoPerfil}
            onChange={this.trocaFotoPerfil}
          />
          <input
            placeholder={"Foto do Post"}
            value={this.state.postPerfil}
            onChange={this.trocaPostPerfil}
          />
          <button onClick={this.adicionarNovaPostagem}>Novo Post</button>
        </ConteudoContainer>
        {componentesPost}
      </MainContainer>
    );
  }
}

export default App;
