import React, {Component} from 'react'
import {Form,Button} from 'react-bootstrap';

import './SignIn.css';


class SignIn extends Component {
  state = {
      name: '',
      email: '',
      password: ''
    }
   onNameChange = (event) => {
       this.setState({
           name: event.target.value
       })
   }
   onEmailChange = (event) => {
     this.setState({
       email: event.target.value
     })
   }
 
   onPassWordChange = (event) => {
     this.setState({
       password: event.target.value
     })
   }
 
  //  onSubmit = () => {
  //    fetch('https://morning-tundra-60032.herokuapp.com/register', {
  //    method: 'post',
  //    headers: {'Content-Type': 'application/json'},
  //    body: JSON.stringify({
  //       name: this.state.name, 
  //       email: this.state.email,
  //       password: this.state.password
  //    })  
  //    })
  //    .then(response => response.json())
  //    .then(user => {
  //      if (user){
  //          this.props.loadUser(user)
  //        this.props.onRouteChange('home')
  //      }
  //    })
  //  }

  render() {
  return(
 <Form>
 <h1 className='form-title'>Sign In</h1>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="secondary" type="submit">
    Sign In
  </Button>
</Form>
          )
}
}

export default SignIn