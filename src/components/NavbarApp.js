import React, { Component } from 'react';
import Logo from '../images/logohere.png'
import { Navbar, NavbarBrand, NavbarNav,  NavItem, Button, Fa } from 'mdbreact';
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

    notifications(){
        this.props.history.push('/notific')
    }

    wall(){
        this.props.history.push('/home')
    }

    render() {
        return (
            <Router>
                <Navbar color="indigo darken-4" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                    <p>SAVE here</p>
                    </NavbarBrand>
                        <NavbarNav right>
                          <NavItem>
                          <Button color="black" size="sm" className="rounded"onClick={this.wall.bind(this)}><Fa icon="arrow-left" size="2x"/></Button>
                            <Button color="black" size="sm" className="rounded"onClick={this.notifications.bind(this)}><Fa icon="bell" size="2x"/></Button>
                            <Button color="black" size="sm" className="rounded" onClick={this.logout.bind(this)}><Fa icon="sign-out" size="2x"/></Button>
                          </NavItem>
                        </NavbarNav>
                </Navbar>
            </Router>
        );
    }
}

export default withRouter(NavbarApp);