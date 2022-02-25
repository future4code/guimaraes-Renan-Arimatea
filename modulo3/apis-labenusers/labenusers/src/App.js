import React from 'react';
import LoginPage from './components/LoginPage';
import Usuarios from './components/Usuarios';
import './App.css';

export default class App extends React.Component {
  state = {
    paginaAtual: "LoginPage"
  }

  mudarPagina = () => {
    if (this.state.paginaAtual === "LoginPage") {

      this.setState({ paginaAtual: "users" })

    } else {

      this.setState({ paginaAtual: "LoginPage" })
    }
  };

  render() {
    return (

      <div>
        <button onClick={this.mudarPagina}>Trocar de tela</button>

        {this.state.paginaAtual === "LoginPage" ? <LoginPage /> : <Usuarios />}
      </div>
    )
  }
}