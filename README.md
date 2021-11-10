# README
import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"

import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom"

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
  render () {
    return (
    <Router>
    <Header {...this.props} />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route 
            path="/apartmentindex" 
            element={<ApartmentIndex
            apartments={apartments} />} />              
    </Routes>
    <Footer {...this.props} />
    </Router>
     )
    }
}


export default App


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
