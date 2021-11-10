import React, { Component } from "react"
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'
import logo from '../assets/distrikt-logo.jpg'

Enzyme.configure({adapter: new Adapter()})

describe("When ApartmentIndex renders", () => {
    it("displays a heading", () => {
      const apartmentIndex = shallow(<ApartmentIndex />)
      const indexHeading = apartmentIndex.find("h3")
      expect(indexHeading.text()).toEqual("")
    })
  })
