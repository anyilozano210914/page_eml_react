import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return(
    <footer>
      <Container fluid>
        <Row>
          <Col md="8" sm="6" className="text-footer" style={{ height: 20 }}>
            <span> &copy; 2000 - { new Date().getFullYear() } EML S.A.S. Todos los derechos reservados.<span> Política de privacidad.</span></span>
          </Col>
          <Col md="4" sm="6" className="img-footer" style={{ height: 20 }}>
            <a href="https://co.linkedin.com/company/eml-publicidad?trk=similar-pages_result-card_full-click">
              <img src="img/linkedin.png" alt="Linkedin Logo"/>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;