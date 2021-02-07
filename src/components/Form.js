import React from "react";
import { Container, Row, Col } from "reactstrap";

class Form extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Container id="contacto">
          <Row className="mt-5">
            <Col lg="6" md="6" sm="12" xs="12" className="form-text">
              <h2>
                Queremos trabajar <br/> con tu marca, 
                <span>
                  pongámonos <br/> en contacto y hablemos
                </span>
              </h2>
              <p>Somos una agencia healthcare con más</p>
              <p><span class="p">de 20 años de experiencia desarrollando</span></p>
              <p>comunicaciones estratégicas para marcas</p>
              <p><span class="pp">que generan vida.</span></p>
            </Col>
            <Col lg="6" md="6" sm="12" xs="12" className="p-0"></Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Form;