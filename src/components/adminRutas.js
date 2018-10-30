import React, { Component } from 'react';
import NavbarApp from './NavbarApp';
import LocationApp from './LocationApp';
import { Button, Image } from 'mdbreact';
import maparutas from '../images/maparutas.PNG';
import FooterApp from './Footer';

class adminRutas extends  Component {

    adminRutas(){
        this.props.history.push('/adminRutas')
    }

    render(){
        return (
     <div>
         <NavbarApp/>
         <p>Numero de ruta :5</p>
         <p><strong>Tipo de ruta: En trayecto a Colegio las Americas</strong></p>
         <img  id="rutas" src={maparutas}></img>

         <FooterApp/>
         {/* <LocationApp /> */}

           

        </div>
                
                )
            }

        }

        export default adminRutas;