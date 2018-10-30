import React, { Component } from 'react';
import LocationApp from './LocationApp';
import NavbarApp from './NavbarApp';
import { TableBody } from 'mdbreact';


class WallApp extends Component {
    render(){
        return(
            <section>
            <NavbarApp />
            <input className="mt-3 mb-3">
            </input>
            <LocationApp />
            <p>Hora de llegada aproximada a colegio las Américas</p>
            
            </section>
        )
    }
}

export default WallApp;