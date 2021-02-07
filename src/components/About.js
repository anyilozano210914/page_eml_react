import React from "react";
import { Col, Container, Row } from "reactstrap";
import items from '../data/AboutInfo';

const About = () => {
  return (
    <React.Fragment>
      <Container id="nosotros" className="mt-5">
        <Row>
          <Col md="12" xs="12" sm="12" className="about__title d-flex justify-content-center">
            <h2>Somos una agencia de comunicaciones estratégicas</h2>
          </Col>
          <Col md="12" xs="12" sm="12" className="about__subtitle d-flex justify-content-center">
            <h3>especializada en el sector healthcare</h3>
          </Col>
          <Col md="12" xs="12" sm="12" className="about__text d-flex justify-content-center mt-5">
            <p>Contamos con un equipo integral de profesionales que enfocan todo su talento en la <br/> comunicación de marcas de los siguientes sectores: </p>
          </Col>
          <Col md="12" xs="12" sm="12" className="about_icons d-flex justify-content-center mt-5">
            <Row>
              {items.map(item => <Col md="4" sm="6" xs="12" lg="4" key={item.text}>
                <img src={item.img} alt={item.alt}/>
                <h4>{item.text}</h4>
              </Col>)}
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default About;