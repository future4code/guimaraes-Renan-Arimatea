import React from "react";
import styled from "styled-components"
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";

class App extends React.Component  {
  render () {
    return (
      <div>
        <Navbar/>
         <Home/>
         <Footer/>
      </div>
    )
  }
}

export default App;
