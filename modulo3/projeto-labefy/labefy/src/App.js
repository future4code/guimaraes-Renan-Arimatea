import React from "react";
import styled from "styled-components"
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";

class App extends React.Component  {
  render () {
    return (
      <div>
         <Home/>
      </div>
    )
  }
}

export default App;
