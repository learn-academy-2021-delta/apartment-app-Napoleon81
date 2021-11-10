import React, { Component } from 'react'
import {Form, FormGroup, Input, Button, Label} from 'reactstrap'


class ApartmentNew extends Component {
  constructor(props){
    super(props)
      this.state = {
        form:{
        name: "",
        street: "",
        city: "",
        state: "",
        manager: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        pets: "",
        user_id: ""
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
    this.props.createDud(this.state.form)
    this.setState({submitted: true})
  }
  
  render() {
    return (
      <div className="page-body">
      <h3>Add a Listing</h3>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.form.name}/>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="street">Street</Label>
            <Input
              type="text"
              name="street"
              onChange={this.handleChange}
              value={this.state.form.street}/>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="text"
              name="city"
              onChange={this.handleChange}
              value={this.state.form.city}/>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              type="text"
              name="state"
              onChange={this.handleChange}
              value={this.state.form.state}/>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="manager">Name</Label>
            <Input
              type="text"
              name="manager"
              onChange={this.handleChange}
              value={this.state.form.manager}/>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input
              type="text"
              name="price"
              onChange={this.handleChange}
              value={this.state.form.price}/>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="bedrooms">Bedrooms</Label>
            <Input
              type="number"
              name="bedrooms"
              min="1"
            max="4"
              onChange={this.handleChange}
              value={this.state.form.bedrooms}/>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="bathrooms">Bathrooms</Label>
            <Input
              type="number"
              name="bathrooms"
              min="1"
            max="3"
              onChange={this.handleChange}
              value={this.state.form.bathrooms}/>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="pets">Age</Label>
            <Input
            type="text"
            name="pets"
            
            onChange={this.handleChange}
            value={this.state.form.pets}/>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="user_id">User ID</Label>
            <Input
            type="number"
            name="user_id"
            min="5"
            max="10"
            onChange={this.handleChange}
            value={this.state.form.user_id}
            />
          </FormGroup>
            <Button
            name="submit"
            onClick={this.handleSubmit}>
            New Profile
            </Button>
            </Form>
              {this.state.submitted && <Redirect to="/apartmentindex" />}
            </div>
          )
        }
      }
      export default ApartmentNew