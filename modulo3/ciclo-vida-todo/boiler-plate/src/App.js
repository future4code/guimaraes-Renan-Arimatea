import React from 'react'
import styled from 'styled-components'
import './styles.css'


// --------------------------------- ESTILIZAÇÃO ------------------------------ //


const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: auto;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.2em;
  color: #ffffff;
  background-color: #000000;
  text-align: center;
  gap: .1em;

  h1 {
    padding: .7em 0;
    font-size: 2.2em;
  }
`

const TarefaList = styled.ul`
  padding: 0;
  width: 10em;
`

const Tarefa = styled.li`
  text-align: center;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  list-style: none;
  padding: .5em;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;

  button {
    border-radius: .5em;
    padding: .2em;
  }
`
// -------------------------------------------------------------------------- //


class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: "Lição de Casa",
          completa: false
        }
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {

    const tarefas = this.state.tarefas;

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
  }

  componentDidMount() {

    if (localStorage.getItem("tarefas")) {

      const tarefasLista = localStorage.getItem("tarefas")

      const tarefasObjetos = JSON.parse(tarefasLista)
  
      this.setState({
        tarefas: tarefasObjetos
      })
    }
  }

  onChangeInput = (event) => {

    this.setState({
      inputValue: event.target.value
    })
  }

  criaTarefa = () => {

    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novaListaDeTarefa = [...this.state.tarefas, novaTarefa];

    this.setState({
      tarefas: novaListaDeTarefa
    })
  }

  selectTarefa = (id) => {

    const novaLista = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          completa: !tarefa.completa
        }
      }
      return tarefa
    })

    this.setState({ tarefas: novaLista });

  }

  onChangeFilter = (event) => {

    this.setState({
      filtro: event.target.value
    })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <Main>
        <h1>LISTA DE TAREFAS</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </Main>
    )
  }
}

export default App
