import React from "react";
import axios from "axios";

const axiosConfig = {
  headers: {
    Authorization: "renan-arimatea-guimaraes"
  }
}

class UsuariosInfo extends React.Component {
  state = {
    usuarioInfo: {},
    usuarioEdicao: "editButton",
    nome: "",
    email: ""
  };

  componentDidMount() {
    this.getUsuariosInfo();
  }

  getUsuariosInfo = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
          this.props.usuarioId
        }`,
        axiosConfig
      )

      .then(response => {
        this.setState({ usuarioInfo: response.data })
      })

      .catch(err => {
        console.log(err);
      })
  }

  AreaDeEdicao = () => {
    if (this.state.edicaoDoUsuario === "editButton") {

      this.setState({ edicaoDoUsuario: "userEditForm" })

    } else {

      this.setState({ edicaoDoUsuario: "editButton" })
    }
  }

  MudarNome = event => {
    const novoNome = event.target.value

    this.setState({ nome: novoNome })
  }

  MudarEmail = event => {
    const novoEmail = event.target.value

    this.setState({ email: novoEmail })
  }

  CriarUsuario = () => {
    const main = {
      nome: this.state.nome,
      email: this.state.email
    }

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
          this.props.usuarioInfo
        }`,
        main,
        axiosConfig
      )

      .then(() => {
        this.setState({ nome: "", email: "" })

        this.getUsuariosInfo()

        this.AreaDeEdicao()

        alert(`Usuário ${this.state.nome} alterado com sucesso!`);
      })

      .catch(error => {

        alert("Erro ao criar o usuário")

        console.log(error)
      })
  }

  render() {
    const edicaoDoUsuario =

      this.state.edicaoDoUsuario === "editButton" ? (

        <button onClick={this.AreaDeEdicao}>Editar Usuário</button>

    ) : (

        <div>
          <input
            placeholder="Nome"
            type="text"
            value={this.state.nome}
            onChange={this.MudarNome}
          />

          <input
            placeholder="E-mail"
            type="email"
            value={this.state.email}
            onChange={this.MudarEmail}
          />

          <button onClick={this.CriarUsuario}>Salvar informações</button>

        </div>
    )

    return (
      <div>
        <div>
          <p>{this.state.usuarioInfo.nome}</p>
          <p>{this.state.usuarioInfo.email}</p>
        </div>

        <div>{edicaoDoUsuario}</div>

        <hr/>

        <button onClick={this.props.mudarPagina}>
          Voltar para lista de usuários
        </button>

      </div>
    );
  }
}

export default UsuariosInfo;
