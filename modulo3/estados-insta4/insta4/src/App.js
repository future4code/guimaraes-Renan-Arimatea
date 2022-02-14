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

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha@steves_official'}
          fotoUsuario={'https://picsum.photos/id/338/50/50'}
          fotoPost={'https://picsum.photos/id/449/200/150'}
        />

        <Post2
          nomeUsuario={'_Maykon_souza'}
          fotoUsuario={'https://picsum.photos/id/237/50/50'}
          fotoPost={'https://picsum.photos/id/453/200/150'}
        />

        <Post3
          nomeUsuario={'fer_m@yer'}
          fotoUsuario={'https://picsum.photos/id/446/50/50'}
          fotoPost={'https://picsum.photos/id/1005/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
