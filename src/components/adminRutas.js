import React, { Component } from 'react';
import NavbarApp from './NavbarApp';
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
         <p className="text-center mt-2">Numero de ruta :5</p>
         <p className="text-center"><strong>Tipo de ruta: En trayecto a Colegio las Americas</strong></p>
         <div className="text-center">
         <img  id="rutas" src={maparutas} alt="mapa de rutas"></img>
         </div>
         <FooterApp/>

        </div>   
                )
            }
        }

        export default adminRutas;