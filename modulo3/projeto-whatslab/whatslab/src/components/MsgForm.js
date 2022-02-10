import React from 'react';
import styled from 'styled-components'

const MsgFormBox = styled.div`
  display: grid;
  grid-template-columns: 9vw 1fr 7vw;
  gap: 1em;
  height: 5vh;
  padding: 1em;
`

const UserInput = styled.input`
  width: 7.5vw;
  padding: 1em;
  font-size: 12px;
  border-radius: 1em;
  border: none;
`

const TextInput = styled.input`
  flex: 1;
  padding: 1em;
  font-size: 12px;
  border-radius: 1em;
  border: none;
`

const SendText = styled.button`
  border: none;
  border-radius: 0.5em;
  font-size: 14px;
  font-weight: bolder;
`

export class MsgForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userValue: '',
      textValue: ''
    }
  }

  BoxUser = (event) => {
    this.setState({userValue: event.target.value})
  }

  BoxText = (event) => {
    this.setState({textValue: event.target.value})
  }

  SendText = (event) => {
    event.preventDefault()
    const message = {
      user: this.state.userValue,
      text: this.state.textValue
    }

    this.props.addMessage(message)

    this.setState({textValue: ''})
  }

  render() {
    return (
      <MsgFormBox onSubmit={this.SendText}>
        <UserInput type="text" placeholder={'Usuário'} onChange={this.BoxUser} value={this.state.userValue}/>
        <TextInput type="text" placeholder={'Mensagem'} onChange={this.BoxText}  value={this.state.textValue}/>
        <SendText onClick={this.SendText}>Enviar</SendText>
      </MsgFormBox>
    );
  }
}