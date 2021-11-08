import React, { Component }
from "react"
import { NavLink } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ApartmentEdit from "./pages/apartmentEdit"
import ApartmentIndex from "./pages/apartmentIndex"
import ApartmentNew from "./pages/apartmentNew"
import NotFound from "./pages/notFound"

import MockApartments from "./components/mockApartments"

import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom"
class App extends Component {
  render () {
    return (
      <Router>
      <Header {...this.props} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        </Routes>
      <Footer/>
      </Router>
    )
  }
}

export default App
