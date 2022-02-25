import React from "react"
import axios from "axios"

class LoginPage extends React.Component {

    state = {
        name: "",
        email: ""
    }

    MudarNome = event => {
        const novoNome = event.target.value;
    
        this.setState({ name: novoNome });
      }
    
    MudarEmail = event => {
        const novoEmail = event.target.value;
    
        this.setState({ email: novoEmail });
      }
    
    CriarUsuario = () => {
        const axiosConfig = {

          headers: {

            Authorization: "renan-arimatea-guimaraes"
          }
        }
    
        const main = {
          name: this.state.name,
          email: this.state.email
        }
    
        axios
          .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
           main, 
           axiosConfig
           )

          .then(() => {

            alert(`Usuário ${this.state.name} Criado Com Sucesso!`)

            this.setState({ name: "", email: "" })

          })
          .catch(error => {

            alert("Erro ao criar o usuário")

            console.log(error)
          })
    }
    
      render() {

        return (

          <div>
            <input
              placeholder="Nome"
              type="text"
              value={this.state.name}
              onChange={this.MudarNome}
            />

            <input
              placeholder="Email"
              type="email"
              value={this.state.email}
              onChange={this.MudarEmail}
            />

            <button onClick={this.CriarUsuario}>Criar Usuário</button>

          </div>
        );
    }
}
 
    export default LoginPage;
    
