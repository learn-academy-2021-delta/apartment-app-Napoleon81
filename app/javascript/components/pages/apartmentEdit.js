import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ApartmentEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: this.props.apartment ? this.props.apartment.name : "",
        street: this.props.apartrment? this.props.apartment.street : "",
        city: this.props.apartment ? this.props.apartment.city : "",
        state: this.props.apartment ? this.props.apartment.state : "",
        manager: this.props.apartment ? this.props.apartment.manager : "",
        email: this.props.apartment ? this.props.apartment.email : "",
        price: this.props.apartment ? this.props.apartment.price : "",
        bedrooms: this.props.apartment ? this.props.apartment.bedrooms: "",
        bathrooms: this.props.apartment ? this.props.apartment.bathrooms : "",
        pets: this.props.apartment ? this.props.apartment.pets : "",
        user_id: this.props.apartment ? this.props.apartment.user_id : "",
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    this.props.updateApartment(this.state.form, this.props.id)
    this.setState({submitted: true})
  }
  render() {
    
    return (
      <div className="page-body">
        <h3>Update Listing</h3>
        <Form>
          <FormGroup>
            <Label for="name">
              Listings Name
            </Label>
            <Input
              name="name"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="street">
              Street Address
            </Label>
            <Input
              name="street"
              type="number"
              min="1"
              max="99"
              onChange={this.handleChange}
              value={this.state.form.street}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">
               City 
            </Label>
            <Input
              name="city"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.city}
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">
              State
            </Label>
            <Input
              name="state"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.state}
            />
          </FormGroup>
          <FormGroup>
            <Label for="manager">
              Manager's Name
            </Label>
            <Input
              name="manager"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.manager}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">
              Email
            </Label>
            <Input
              name="email"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">
              Price
            </Label>
            <Input
              name="price"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.price}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bedrooms">
              Bedrooms
            </Label>
            <Input
              name="bedrooms"
              type="number"
              onChange={this.handleChange}
              value={this.state.form.bedrooms}
            />
          </FormGroup> 
          <FormGroup>
            <Label for="bathrooms">
              Bathrooms
            </Label>
            <Input
              name="bathrooms"
              type="number"
              onChange={this.handleChange}
              value={this.state.form.bathrooms}
            />
          </FormGroup> <FormGroup>
            <Label for="pets">
              Pets
            </Label>
            <Input
              name="pets"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.pets}
            />
          </FormGroup>
          <FormGroup>
            <Label for="user_id">
              User ID
            </Label>
            <Input
              name="user_id"
              type="number"
              onChange={this.handleChange}
              value={this.state.form.user_id}
            />
          </FormGroup>
          <Button
            onClick={this.handleSubmit}
            name="submit"
          >
            Update Apartment
          </Button>
        {this.state.submitted && <Redirect to={`/apartmentshow/${this.props.apartment.id}`} />}
        <Button
            onClick={this.handleSubmit}
            name="submit"
          >
            Delete Apartment 
          </Button>
        </Form>
        {this.state.submitted && <Redirect to={`/apartmentshow/${this.props.apartment.id}`} />}
      </div>
    )
  }

}
export default ApartmentEdit