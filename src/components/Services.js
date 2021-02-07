import React from "react";
import { Row, Col } from "reactstrap";
import { items, itemsbox2 } from "../data/ServicesInfo";

class Services extends React.Component {
  constructor(props){
    super(props);
    this.addEvent = this.addEvent.bind(this);
    this.addEventBlock2 = this.addEventBlock2.bind(this);
  }

  addEvent(id){
    const { innerWidth: width } = window;
    if(width >= 1025){
      switch (id) {
        case 'abrir_desplegable_1':
          document.getElementById('desplegable-content-2').classList.remove('mostrar');
          document.getElementById('desplegable-content-5').classList.remove('mostrar');
          document.getElementById('desplegable-content-4').classList.remove('mostrar');
          document.getElementById('desplegable-content-3').classList.remove('mostrar');
          document.getElementById('desplegable-content-1').classList.toggle('mostrar');
          break;
        case 'abrir_desplegable_2':
          document.getElementById('desplegable-content-1').classList.remove('mostrar');
          document.getElementById('desplegable-content-4').classList.remove('mostrar');
          document.getElementById('desplegable-content-5').classList.remove('mostrar');
          document.getElementById('desplegable-content-3').classList.remove('mostrar');
          document.getElementById('desplegable-content-2').classList.toggle('mostrar');
          break;
        case 'abrir_desplegable_3':
          document.getElementById('desplegable-content-1').classList.remove('mostrar');
          document.getElementById('desplegable-content-4').classList.remove('mostrar');
          document.getElementById('desplegable-content-5').classList.remove('mostrar');
          document.getElementById('desplegable-content-2').classList.remove('mostrar');
          document.getElementById('desplegable-content-3').classList.toggle('mostrar');
          break;
        case 'abrir_desplegable_4':
          document.getElementById('desplegable-content-1').classList.remove('mostrar');
          document.getElementById('desplegable-content-2').classList.remove('mostrar');
          document.getElementById('desplegable-content-5').classList.remove('mostrar');
          document.getElementById('desplegable-content-3').classList.remove('mostrar');
          document.getElementById('desplegable-content-4').classList.toggle('mostrar');
          break;
        case 'abrir_desplegable_5':
          document.getElementById('desplegable-content-1').classList.remove('mostrar');
          document.getElementById('desplegable-content-4').classList.remove('mostrar');
          document.getElementById('desplegable-content-2').classList.remove('mostrar');
          document.getElementById('desplegable-content-3').classList.remove('mostrar');
          document.getElementById('desplegable-content-5').classList.toggle('mostrar');
          break;
        default:
          break;
      }
    }
  }

  addEventBlock2(id){
    const { innerWidth: width } = window;
    if(width >= 1025){
      switch (id) {
        case 'abrir_desplegable_block_1':
          document.getElementById('desplegable-content-block-2').classList.remove('mostrar');
          document.getElementById('desplegable-content-block-4').classList.remove('mostrar');
          document.getElementById('desplegable-content-block-3').classList.remove('mostrar');
          document.getElementById('desplegable-content-block-1').classList.toggle('mostrar');
          break;
        case 'abrir_desplegable_block_2':
          document.getElementById('desplegable-content-block-1').classList.remove('mostrar');
          document.getElementById('desplegable-content-block-4').classList.remove('mostrar');
          document.getElementById('desplegable-content-block-3').classList.remove('mostrar');
          document.getElementById('desplegable-content-block-2').classList.toggle('mostrar');
          break;
        case 'abrir_desplegable_block_3':
          document.getElementById('desplegable-content-block-1').classList.remove('mostrar');
          document.getElementById('desplegable-content-block-4').classList.remove('mostrar');
          document.getElementById('desplegable-content-block-2').classList.remove('mostrar');
          document.getElementById('desplegable-content-block-3').classList.toggle('mostrar');
          break;
        case 'abrir_desplegable_block_4':
          document.getElementById('desplegable-content-block-1').classList.remove('mostrar');
          document.getElementById('desplegable-content-block-2').classList.remove('mostrar');
          document.getElementById('desplegable-content-block-3').classList.remove('mostrar');
          document.getElementById('desplegable-content-block-4').classList.toggle('mostrar');
          break;
        default:
          break;
      }
    }
  }

  render(){
    const { innerWidth: width } = window;
    return (
      <React.Fragment>
        <Row id="servicios" style={{ marginLeft: 0, marginRight: 0 }}>
          <Col md="6" sm="12" xs="12" className="first-box mt-4">
            <Col md="12">
              <h2>Nuestros servicios</h2>
            </Col>
            <Col md="12" className="mt-5">
              <div className="bajar-text">
                {
                  items.map((item, index) =>  
                    <React.Fragment key={index}>
                      {
                        width >= 1025 ?
                        <h6 className="box-text_one" id={`abrir_desplegable_${index + 1}`} onMouseOver={ () => this.addEvent(`abrir_desplegable_${index + 1}`) }>
                          <i className="icon-circle-thin"></i>
                          {item.title}
                        </h6> :
                        <h6 className="box-text_one" id={`abrir_desplegable_${index + 1}`} onClick={ this.addEvent(`abrir_desplegable_${index + 1}`) }>
                          <i className="icon-circle-thin"></i>
                          {item.title}
                        </h6>
                      }
                      
                      <div className="desplegable-content" id={`desplegable-content-${index + 1}`}>
                        <ul className="one_list myList">
                          {
                            item.list.map(list => (
                              <li key={list}>{list}</li>
                            ))
                          }
                        </ul>
                      </div>
                    </React.Fragment>
                  )
                }
              </div>
            </Col>
          </Col>
          <Col md="6" className="second-box mt-5">
          <Col md="12" className="mt-5">
              <div className="bajar-text">
                {
                  itemsbox2.map((item, index) =>  
                    <React.Fragment key={index}>
                      {
                        width >= 1025 ?
                        <h6 className="box-text_one" id={`abrir_desplegable_${index + 1}`} onMouseOver={ () => this.addEventBlock2(`abrir_desplegable_block_${index + 1}`) }>
                          <i className="icon-circle-thin"></i>
                          {item.title}
                        </h6> :
                        <h6 className="box-text_one" id={`abrir_desplegable_${index + 1}`} onClick={ this.addEvent(`abrir_desplegable_${index + 1}`) }>
                          <i className="icon-circle-thin"></i>
                          {item.title}
                        </h6>
                      }
                      
                      <div className="desplegable-content" id={`desplegable-content-block-${index + 1}`}>
                        <ul className="one_list myList">
                          {
                            item.list.map(list => (
                              <li key={list}>{list}</li>
                            ))
                          }
                        </ul>
                      </div>
                    </React.Fragment>
                  )
                }
              </div>
            </Col>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

  //   document.getElementById('abrir_desplegable_1').addEventListener('mouseover', function(){
  //     document.getElementById('desplegable-content').classList.toggle('mostrar');
  //     document.getElementById('desplegable-content-2').classList.remove('mostrar');
  //     document.getElementById('desplegable-content-3').classList.remove('mostrar');
  //   });

  //   document.getElementById('abrir_desplegable_2').addEventListener('mouseover', function(){
  //     document.getElementById('desplegable-content').classList.remove('mostrar');
  //     document.getElementById('desplegable-content-2').classList.toggle('mostrar');
  //     document.getElementById('desplegable-content-3').classList.remove('mostrar');
  //   });

  //   document.getElementById('abrir_desplegable_3').addEventListener('mouseover', function(){
  //     document.getElementById('desplegable-content').classList.remove('mostrar');
  //     document.getElementById('desplegable-content-2').classList.remove('mostrar');
  //     document.getElementById('desplegable-content-3').classList.toggle('mostrar');
  //   });

export default Services;