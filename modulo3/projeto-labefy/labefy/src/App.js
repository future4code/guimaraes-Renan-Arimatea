import React from "react";
import styled from "styled-components"
import axios from "axios";
import {BrowserRouter} from 'react-router-dom'

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Trail from "./components/form/Trail"

class App extends React.Component  {
  render () {
    return (
      <div>
         <BrowserRouter>
            <Header/>
            <Trail/>
            <Footer/>
         </BrowserRouter>
      </div>
    )
  }
}

export default App;
