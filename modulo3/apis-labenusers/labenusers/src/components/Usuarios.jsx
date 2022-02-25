import React from "react";
import styled from "styled-components";
import axios from "axios";
import UsuariosInfo from "./UsuariosInfo";

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
  padding: 0.5em;
`;

const axiosConfig = {
  headers: {
    Authorization: "renan-arimatea-guimaraes"
  }
};

class Usuarios extends React.Component {
  state = {
    listaDeUsuarios: [],
    paginaAtual: "usersList",
    usuarioInfo: "",
    nome: ""
  }

  componentDidMount() {
    this.BuscarLista()
  }

  BuscarLista = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then(response => {

        this.setState({ usersList: response.data })
      })
  }

  DeletarUsuario = usuarioInfo => {
    if (window.confirm("Tem certeza que deseja deletar este usuário?")) {
      axios

        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioInfo}`,
          axiosConfig
        )

        .then(() => {

          alert("O usuário foi deletado!")

          this.BuscarLista()
        })

        .catch(err => {

          alert("Não foi possível apagar o usuário")
        })
    }
  }

  MudarPagina = usuarioInfo => {

    if (this.state.paginaAtual === "usersList") {

      this.setState({ paginaAtual: "userDetail", usuarioInfo: usuarioInfo })

    } else {

      this.setState({ paginaAtual: "usersList", usuarioInfo: "" })
    }
  }

  MudarNome = event => {
    const novoNome = event.target.value

    this.setState({ nome: novoNome })
  }

  BuscarUsuario = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.nome
        }&email=`,
        axiosConfig
      )

      .then(response => {
        this.setState({ listaDeUsuarios: response.data })
      })

      .catch(error => {
        alert("Erro ao criar o usuário")
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        {this.state.paginaAtual === "usersList" ? (

          <div>
            <ul>
              {this.state.listaDeUsuarios.length === 0 && <div>Buscando...</div>}

              {this.state.listaDeUsuarios.map(usuario => {
                return (
                  <li>
                    <span onClick={() => this.MudarPagina(usuario.id)}>
                      {usuario.name}
                    </span>

                    <DeleteButton
                      onClick={() => this.DeletarUsuario(usuario.id)}
                    >
                      X
                    </DeleteButton>
                  </li>
                )
              })}

            </ul>

            <hr />

            <h4>Buscar usuário</h4>

            <input
              placeholder="Nome exato para busca"
              type="text"
              value={this.state.nome}
              onChange={this.MudarNome}
            />

            <button onClick={this.BuscarUsuario}>Buscar</button>
          </div>

        ) : (

          <UsuariosInfo userId={this.state.usuarioInfo} changePage={this.mudarPagina}/>
        )}
      </div>
    )
  }
}

export default Usuarios;