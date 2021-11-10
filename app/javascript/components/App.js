import React, { Component } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import NotFound from "./pages/NotFound"
import AboutUs from "./components/AboutUs"
import LearnMore from "./components/learnMore"
import ProtectedIndex from './pages/ProtectedIndex'


import MockApartments from "./components/MockApartments"


import {
  BrowserRouter as Router,
  Routes,
  Route 
} 
from "react-router-dom"

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        apartments: []
      }
    }
  
    componentDidMount(){
      this.readApartment()
    }
  
    readApartment = () => {
      fetch("/apartments")
      .then(response => response.json())
      .then(apartmentArray => this.setState({apartments: payload}))
      .catch(errors => console.log("index errors:", errors))
    }
  }
  createApartment = (newApartment) => {
    fetch("/newApartment"), {
      body: JSON.stringify(newApartment),
      headers: {
        "Content-Type" : "application/json"
      },
      method: "POST"
    }
    .then(response => response.json())
    .then(newApartmentArray => this.setState({newapartments: payload}))
    .catch(errors => console.log("index errors:", errors))
  }

  updateApartment = (editedApartment, id) => {
    fetch("/editedApartment/${id}"),{
      body: JSON.stringify(editedApartment),
      headers: {
        "Content-Type" : "application/json"
      },
      method: "PATCH"
    }
    .then(response => response.json())
    .then(editedApartmentArray => this.setState({editedapartments: payload}))
    .catch(errors => console.log("index errors:", errors))
  }

  deleteApartment = (id) => {
    fetch("/${id}"), {
      headers: {
        "Content-Type" : "application/json"
      },
      method: "DELETE"
    }
    .then(response => response.json())
    .then(deleteApartmentArray => this.setState({deleteapartments: payload}))
    .catch(errors => console.log("index errors:", errors))

}
 

  render (); {
    const {apartments} = this .state 
    return (
    <Router>
    <Header {...this.props} />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route 
            path="/apartmentindex" 
            element={<ApartmentIndex
            apartments={apartments} />} />  
    <Route path="/about" element={ <AboutUs/> } />
    <Route path="/learn" elememt={ <LearnMore/> } />            
    </Routes>
    <Footer {...this.props} />
    </Router>
     )
    }
    export default App