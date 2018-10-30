import React, { Component } from 'react';
import NavbarApp from './NavbarApp';
import { Fa, Button, Col, Row } from 'mdbreact';
import FooterApp from './Footer';


class Checklist extends Component {
    render(){
        return(
            <section>
            <NavbarApp />
            <div className="titlecheck">Checklist de Alumnos <strong/>   <span className="mr-left">Grupo 5A</span>  </div>
            <Row className="container-fluid">
            <Col md="6">
            <Fa icon="fa fa-user-circle-o" className="mt-2 mb-2" size="2x"/> <strong>Daniel López Duran  </strong>
            </Col>
            <Col className="col-6" md="3">
            <Button className="btn-inline"color="black">Presente</Button>
            </Col>
             <Col className="col-6" md="3">
            <Button className="btn-inline">Ausente</Button>
            </Col>
            </Row>

            <Row className="container-fluid">
            <Col md="6">
            <Fa icon="fa fa-user-circle-o" className="mt-2 mb-2" size="2x"/>  <strong>Karina López Duran </strong>
            </Col>
            <Col className="col-6" md="3">
            <Button className="btn-inline" color="black">Presente</Button>
            </Col>
            <Col className="col-6" md="3">
            <Button className="btn-inline">Ausente</Button>
            </Col>
            </Row>

             <Row className="container-fluid">
             <Col md="6">
                <Fa icon="fa fa-user-circle-o" className="mt-2 mb-2" size="2x"/>  <strong>Ana López Duran </strong>
            </Col>
            <Col className="col-6" md="3">
            <Button className="btn-inline" color="black">Presente</Button>
            </Col>
            <Col className="col-6" md="3">
            <Button className="btn-inline">Ausente</Button>
            </Col>
            </Row>

            <Row className="container-fluid">
            <Col md="6">
            <Fa icon="fa fa-user-circle-o" className="mt-2 mb-2" size="2x"/>  <strong>Karen López Duran </strong>
            </Col>
            <Col className="col-6" md="3">
            <Button className="btn-inline" color="black">Presente</Button>
            </Col>
            <Col className="col-6" md="3">
            <Button className="btn-inline">Ausente</Button>
            </Col>
            </Row>

            <FooterApp/>

            
            </section>
        )
    }
}

export default Checklist;