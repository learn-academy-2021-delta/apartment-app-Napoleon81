import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Footer extends Component { 
    render() {
        return (
            <footer>
        <ul>
          <NavLink to="/">&copy;2021 Napoleon</NavLink>
        </ul>
        <ul>
          <NavLink to="/apartmentindex">Apartment Listings</NavLink>
        </ul>
        <ul>
          <NavLink to="/apartmentnew">New Listings</NavLink>
        </ul>
      </footer>
        )
    }
}
export default Footer 