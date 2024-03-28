import { Component } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home'
import Population from "./components/population";
import Crypto from "./components/crypto"

class App extends Component{
  render(){
    return(
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/population' element={<Population />} />
            <Route exact path='/crypto currency' element={<Crypto />} />
          </Routes>
        </Router>
    )
  }
}

export default App
