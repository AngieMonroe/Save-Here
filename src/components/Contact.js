import React, { Component } from 'react';
import NavbarApp from './NavbarApp';
import { Fa, Button, Col, Row } from 'mdbreact';
import FooterApp from './Footer';


class Checklist extends Component {
    render(){
        return(
            <section>
            <NavbarApp />
            <div className="titlecheck">Contacto de Tutores <strong/>   <span className="mr-left">Grupo 5A</span>  </div>
            <Row className="container-fluid">
            <Col md="6">
            <Fa icon="fa fa-user-circle-o" className="mt-2 mb-2" size="2x"/> <strong>Daniel López Duran   <br/> Responsable: Lourdes Duran </strong>
            </Col>
            <Col className="col-6" md="3">
            <Button className="fa fa-phone"  color="black"></Button>
            </Col>
            <Col className="col-6" md="3">
            <Button className="fa fa-commenting"  color="black"></Button>
            </Col>
            </Row>

            <Row className="container-fluid">
            <Col  md="6">
            <Fa icon="fa fa-user-circle-o" className="mt-2 mb-2" size="2x"/>  <strong>Karina López Duran <br/> Responsable: Lourdes Duran </strong>
            </Col>
            <Col className="col-6" md="3">
            <Button className="fa fa-phone"  color="black"></Button>
            </Col>
            <Col className="col-6" md="3">
            <Button className="fa fa-commenting"  color="black"></Button>
            </Col>
            </Row>

             <Row className="container-fluid">
             <Col md="6">
                <Fa icon="fa fa-user-circle-o" className="mt-2 mb-2" size="2x"/>  <strong>Ana López Duran   <br/> Responsable: Lourdes Duran</strong>
            </Col>
            <Col className="col-6" md="3">
            <Button className="fa fa-phone "  color="black"></Button>
            </Col>
            <Col className="col-6"md="3">
            <Button className="fa fa-commenting"  color="black"></Button>
            </Col>
            </Row>

            <Row className="container-fluid">
            <Col md="6">
            <Fa icon="fa fa-user-circle-o" className="mt-2 mb-2" size="2x"/>  <strong>Karen López Duran  <br/> Responsable: Lourdes Duran </strong>
            </Col>
            <Col className="col-6" md="3">
            <Button className="fa fa-phone"  color="black"></Button>
            </Col>
            <Col  className="col-6" md="3">
            <Button className="fa fa-commenting"  color="black"></Button>
            </Col>
            </Row>


            

            <FooterApp/>

            
            </section>
        )
    }
}

export default Checklist;