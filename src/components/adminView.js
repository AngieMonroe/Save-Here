import React, { Component } from 'react';
import NavbarApp from './NavbarApp';
import { Button,Row, Col } from 'mdbreact';
import FooterApp from './Footer';
import { withRouter } from 'react-router-dom';


class adminView extends  Component {

    adminRutas(){
        this.props.history.push('/adminRutas')
    }

    render(){
        return (
     <div>
         <NavbarApp/>
         
         <Row>
             <Col className="mt-4" md="6">
        <select className="browser-default custom-select">
          <option>Colegio</option>
          <option value="1">Colegio las Americas</option>
          <option value="2">Colegio Sara Alarcon</option>
          <option value="3">Colegio Salesiano</option>
          </select>
          </Col>
       
      

        
        <Col className="mt-4" md="6">
        <select className="browser-default custom-select">
        <option>Numero de ruta</option>
        <option value="1">3</option>
        <option value="2">4</option>
        <option value="3">5</option>
        </select>
        </Col>

        <Col className="mt-5" md="6">
        <select className="browser-default custom-select">
        <option>Tipo de ruta</option>
        <option value="1">Normal</option>
        <option value="2">Rapida</option>
        </select>
        </Col>
        

       <Col className="mt-5" md="6">
        <select className="browser-default custom-select">
        <option>Grupo</option>
        <option value="1">5A</option>
        <option value="2">3B</option>
        <option value="3">4C</option>
        </select>
        </Col>
        </Row>

            <Row >
            <Col className="text-center mt-5" md="12">
            <Button color="deep-orange" id="btn-rutas" onClick={this.adminRutas.bind(this)}>></Button>
            <p>Comenzar ruta</p>
            </Col>
             </Row>
           <FooterApp />

        </div>
                
                )
            }

        }

        export default withRouter(adminView);