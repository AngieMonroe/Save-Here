import React, { Component } from 'react';
import firebase from 'firebase';
import { Input, Button, Container, Row, Col } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import './Login.css'

 
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            user:null,
            name:"",
            email:"",
            password:"",
            registrar:"",
            registrarpwd:""
    };
    this.login = this.login.bind(this);
    this.registry = this.registry.bind(this);
    this.handleChange = this.handleChange.bind(this);
        }

          login(e){
            e.preventDefault();
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(result => this.props.history.push('/home'))
            .catch((error)=>{
            console.log(error);
            });    
            
            }
         registry(e) {
           e.preventDefault()
           this.props.history.push('/registro')
        }

        handleChange(e){
            const { value, name } = e.target;
           this.setState({
            [name]: value 
          }) 
          }

          render(){
              return(
        <Container className="text-center">
        <Row className="mt-5 row justify-content-md-center">
          <Col   sm="10" md="6">
          <p className="h1 indigo-text m-5">SURE here</p>
            <form>
              <p className="h3 text-center mb-2">Sign up</p>
              <div className="grey-text" >
                <Input label="Your email"  group type="email" name="email" onChange={this.handleChange} validate error="Error" success="Correcto" />
                <Input label="Your password"  group type="password"  name="password" onChange={this.handleChange} validate/>
              </div>
              <div className="grey-text text-center mt-3" >
              <Button className="btn btn-dark" type="submit" onClick={this.login}>Login</Button>
              </div>
            </form>

          </Col>
        </Row>
      </Container>                 
              );
          }
    }
    export default withRouter(Login);