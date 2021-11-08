import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button, CardTitle, Row, Col } from 'reactstrap'
import logo from '../assets/distrikt-logo.jpg'

class ApartmentIndex extends Component {
  render() {
    const { apartment } = this.props
    return (
      <div className="page-body">
        <h3>View our Listings</h3>
        <div className="index-cards">
          {apartment && apartment.map(apartment => {
            return (
              <Row key={apartment.id}>
                <Col sm="6">
                  <Card body>
                    <CardTitle tag="h5">this is the {apartment.name}</CardTitle>
                    <h2><br />
      <img src={logo} alt="distrikt camp" className="distrikt-logo" /></h2>
                    <NavLink to={`/apartmentshow/${apartment.id}`}><Button>More Info Here</Button></NavLink>
                  </Card>
                </Col>
              </Row>
            )
          })}
        </div>
      </div>
    )
  }
}
export default ApartmentIndex