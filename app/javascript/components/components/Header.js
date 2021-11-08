import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/distrikt-logo.jpg'

class Header extends Component {
    render() {
        console.log("logged in:", this.props.logged_in)
    console.log("user:", this.props.current_user)
    console.log("sign up:", this.props.new_user_route)
    console.log("sign in:", this.props.sign_in_route)
    console.log("sign out:", this.props.sign_out_route)
    const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route 
    }  = this.props
    return (
            <header>
                  <NavLink to="/">
            <img src={logo} alt="logo for distrikt" className="distrikt-logo"/>
            </NavLink>
            <div className="nav-links">
              <ul>
               <li>Apartment Listings</li>
              </ul>
              {!logged_in &&
            <>
               <ul>
                  <a href={new_user_route}>Sign Up</a>
              </ul>
              <ul>
                  <a href={sign_in_route}>Sign In</a>
              </ul>
            </>
        }
        {logged_in && 
            <ul>
                <a href={sign_out_route}>Sign Out</a>
            </ul>
    }
          </div>
            </header>
        )
    }
}
export default Header 