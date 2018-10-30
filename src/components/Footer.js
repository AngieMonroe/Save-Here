import React,{Component} from "react";
import { Col, Container, Row, Footer, Button } from "mdbreact";
import mapa from '../images/mapa.PNG';
import paradas from '../images/paradas.PNG';
import checklist from '../images/checklist.PNG';
import tutores from '../images/tutores.PNG';
import { withRouter } from 'react-router-dom';

class FooterApp extends Component {

    wall(){
        this.props.history.push('/home')
    }

    adminRutas(){
        this.props.history.push('/adminRutas')
    }

    checklist(){
        this.props.history.push('/Checklist')
    }

   contact(){
        this.props.history.push('/Contact')
    }

render() {
return (

<Footer color="white" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col className="col-6"sm="3" md="3">
      <Button className="btnes" id="mapa" color="white" onClick={this.wall.bind(this)}> <img src={mapa} alt="mapa"></img></Button>
      </Col>
      <Col className="col-6" md="3">
      <Button className="btnes" id="parada" color="white" onClick={this.adminRutas.bind(this)}> <img src={paradas} alt="mapa paradas"></img></Button>
      </Col>
      <Col className="col-6" md="3">
      <Button className="btnes" id="check"color="white"onClick={this.checklist.bind(this)}> <img src={checklist} alt="listado alumnos"></img></Button>
      </Col>
      <Col className="col-6" md="3">
      <Button className="btnes" id="tutores" color="white"onClick={this.contact.bind(this)}> <img src={tutores} alt="contacto alumnos"></img></Button>
      </Col>   
    </Row>
  </Container>
</Footer>
);
}
}

export default withRouter(FooterApp);