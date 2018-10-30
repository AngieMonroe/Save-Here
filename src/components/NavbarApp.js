import React, { Component } from 'react';
import Logo from '../images/logohere.png'
import { Navbar, NavbarBrand, NavbarNav,  NavItem, Button } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';

// Componente navbar
class NavbarApp extends Component {

    logout(){
        firebase.auth().signOut()
        .then(function() {
            console.log('saliendo')
        })
        .catch(function(){
            console.log('error al cerrar sesión')
        })
        this.props.history.push('/login')
    }

    render() {
        return (
            <Router>
                <Navbar color="lime" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                    <img src={Logo} alt="logo" height="80"/>
                    </NavbarBrand>
                        <NavbarNav right>
                          <NavItem>
                            <Button color="red darken-4" className="rounded" onClick={this.logout.bind(this)}>Cerrar sesión</Button>
                          </NavItem>
                        </NavbarNav>
                </Navbar>
            </Router>
        );
    }
}

export default withRouter(NavbarApp);