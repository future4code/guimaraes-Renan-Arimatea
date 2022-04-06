import './App.css';
import { useState } from 'react';
import { limpaMatches } from './services/HttpClient';
import { ChangeScreen } from './components/ChangeScreen';
import { Clear } from './components/style';


function App() {
 
  const [matches, setMatches] = useState([])

  return (
    <div className="App">
      <header className="App-header">
     
        <ChangeScreen setMatches={setMatches} matches={matches}/>
      
        <Clear onClick={()=>limpaMatches(setMatches)}>Limpar Swipes e Matches</Clear>

      </header>
    </div>
  )
}

export default App;
