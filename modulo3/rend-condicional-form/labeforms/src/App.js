import './App.css';
import React from 'react';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

const MainApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    background-color: black;
    height: 100vh;
`

class App extends React.Component {

  state = {
    etapa: 1
  }

  changeEtapas = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;

      case 2:
        return <Etapa2 />;

      case 3:
        return <Etapa3 />;

      case 4:
        return <Final />;
        
      default:
        return <Final />;
    }
  }

  ChamaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  }

  render () {

    return (
        <MainApp>
           {this.changeEtapas()}

           <br />

           {this.state.etapa !== 4 && (<button onClick={this.ChamaProximaEtapa}>Próxima etapa</button>)}
        </MainApp>
    )
  }
}

export default App;
