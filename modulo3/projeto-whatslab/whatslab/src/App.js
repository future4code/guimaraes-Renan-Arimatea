import React from 'react';
import styled from 'styled-components'
import {MsgForm} from './components/MsgForm';

const AppBox = styled.div`
  max-width: 50vw;
  height: 100vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  background-color: #F5EEDC;
`

const MsgContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; 
  justify-content: flex-end;
  padding: 15px;
`

const BoldText = styled.span`
  font-weight: bold;
`

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      messages: []
    }
  }

  addMessage = (message) => {
    this.setState({ messages: [...this.state.messages, message] })
  }

  render() {
    return (
      <AppBox>
        <MsgContent>
          {
            this.state.messages.map((message, index) => <p key={index}><BoldText>{message.user}</BoldText>{': ' + message.text}</p>)
          }
        </MsgContent>
        <MsgForm addMessage={this.addMessage} />
      </AppBox>
    );
  }
}

export default App;

