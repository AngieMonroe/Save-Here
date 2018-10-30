import React, { Component } from 'react';
import LocationApp from './LocationApp';
import NavbarApp from './NavbarApp';
import { Fa } from 'mdbreact';


class WallApp extends Component {
    render(){
        return(
            <section>
            <NavbarApp />
            <div className="container">
            <Fa icon="address-card-o" className="mt-2 mb-2" size="2x"/> <strong>Daniel López Duran <br/> Viaje en Curso </strong>
            <LocationApp />
            <p className="h5 mt-3">Hora de llegada al Colegio: 7:55 AM</p>
            <p className="h5">Hora de Recogida: 7:30 AM</p>
            </div>

            
            </section>
        )
    }
}

export default WallApp;