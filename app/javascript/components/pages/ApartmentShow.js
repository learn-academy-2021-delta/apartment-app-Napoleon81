import React, { Component } from 'react'
import { Card, CardTitle, CardText, Col } from 'reactstrap'
import Kazbah from '../assets/1_Kazbah.jpg'
import Robot from '../assets/2_Robot_Heart.jpg'
import Mayan from '../assets/3_Mayan_Warrior.jpg'
import Question from '../assets/4_Question_Mark.jpg'
import hwly from '../assets/5_HWLY.jpg'
import Ocean from '../assets/White-Ocean.jpg'
import Hearts from '../assets/DH.jpg'
import Mammoth from '../assets/PM.jpg'

class ApartmentShow extends Component {
  render() {
    return (
      <>
        <h3>Distrikt Listings</h3>
        { this.props.apartment && 
        <>
        <Col sm="6">
  <Card body>
    <CardTitle>This is camp {this.props.apartment.name}!</CardTitle>
    <h2><br />
      <img src={Kazbah} alt="Camp Kazbah" className="Camp-Kazbah" /></h2>
    <CardText>located at {this.props.apartment.street} in {this.props.apartment.city}, {this.props.apartment.satate} availble for {this.props.apartment.price} 
    property comes with {this.props.apartment.bedrooms} and {this.props.apartment.bathrooms}. Contact {this.props.apartment.manager} for viewing!</CardText>
  </Card >
  <Card body>
    <CardTitle>This is camp {this.props.apartment.name}!</CardTitle>
    <h2><br />
      <img src={Robot} alt="Camp Robot Heart" className="Camp-Robot_Heart" /></h2>
    <CardText>located at {this.props.apartment.street} in {this.props.apartment.city}, {this.props.apartment.satate} availble for {this.props.apartment.price} 
    property comes with {this.props.apartment.bedrooms} and {this.props.apartment.bathrooms}. Contact {this.props.apartment.manager} for viewing!</CardText>
  </Card >
  <Card body>
    <CardTitle>This is camp {this.props.apartment.name}!</CardTitle>
    <h2><br />
      <img src={Mayan} alt="Camp Mayan Warrior" className="Mayan-Warrior" /></h2>
    <CardText>located at {this.props.apartment.street} in {this.props.apartment.city}, {this.props.apartment.satate} availble for {this.props.apartment.price} 
    property comes with {this.props.apartment.bedrooms} and {this.props.apartment.bathrooms}. Contact {this.props.apartment.manager} for viewing!</CardText>
  </Card >
  <Card body>
    <CardTitle>This is camp {this.props.apartment.name}!</CardTitle>
    <h2><br />
      <img src={Question} alt="Camp Question Mark" className="Question-Mark" /></h2>
    <CardText>located at {this.props.apartment.street} in {this.props.apartment.city}, {this.props.apartment.satate} availble for {this.props.apartment.price} 
    property comes with {this.props.apartment.bedrooms} and {this.props.apartment.bathrooms}. Contact {this.props.apartment.manager} for viewing!</CardText>
  </Card >
  <Card body>
    <CardTitle>This is camp {this.props.apartment.name}!</CardTitle>
    <h2><br />
      <img src={hwly} alt="Camp HWLY" className="Camp-HWLY" /></h2>
    <CardText>located at {this.props.apartment.street} in {this.props.apartment.city}, {this.props.apartment.satate} availble for {this.props.apartment.price} 
    property comes with {this.props.apartment.bedrooms} and {this.props.apartment.bathrooms}. Contact {this.props.apartment.manager} for viewing!</CardText>
  </Card >
  <Card body>
    <CardTitle>This is camp {this.props.apartment.name}!</CardTitle>
    <h2><br />
      <img src={Ocean} alt="Camp White Ocean" className="white-ocean" /></h2>
    <CardText>located at {this.props.apartment.street} in {this.props.apartment.city}, {this.props.apartment.satate} availble for {this.props.apartment.price} 
    property comes with {this.props.apartment.bedrooms} and {this.props.apartment.bathrooms}. Contact {this.props.apartment.manager} for viewing!</CardText>
  </Card >
  <Card body>
    <CardTitle>This is camp {this.props.apartment.name}!</CardTitle>
    <h2><br />
      <img src={Hearts} alt="Camp Desert Hearts" className="Desert-Hearts" /></h2>
    <CardText>located at {this.props.apartment.street} in {this.props.apartment.city}, {this.props.apartment.satate} availble for {this.props.apartment.price} 
    property comes with {this.props.apartment.bedrooms} and {this.props.apartment.bathrooms}. Contact {this.props.apartment.manager} for viewing!</CardText>
  </Card >
  <Card body>
    <CardTitle>This is camp {this.props.apartment.name}!</CardTitle>
    <h2><br />
      <img src={Mammoth} alt="Camp Pink Mommoth" className="Pink-Mammoth" /></h2>
    <CardText>located at {this.props.apartment.street} in {this.props.apartment.city}, {this.props.apartment.satate} availble for {this.props.apartment.price} 
    property comes with {this.props.apartment.bedrooms} and {this.props.apartment.bathrooms}. Contact {this.props.apartment.manager} for viewing!</CardText>
  </Card >
</Col >
</>
        }
      </>
    )
  }
}
export default ApartmentShow