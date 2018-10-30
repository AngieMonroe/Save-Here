import React, { Component } from 'react';
import './App.css';
import fire from './components/Fire';
//import NavbarPage from './component/Navbar';
//import Notify from './component/Notify';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { withRouter } from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user: null
    }
  }
  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({ user });
        this.props.history.push('/home')
      } else{
        this.setState({ user: null });
        this.props.history.replace('/login')
      }
    });
  }


  render() {
    return (
      <div className="App">


      </div>
    );
  }
}

export default withRouter(App);
