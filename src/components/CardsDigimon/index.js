import React, {Component} from 'react';
import {Card, Button, Col} from 'react-bootstrap'
import api from '../../services/api'
// import { Container } from './styles';

class CardsDigimon extends Component {
  state ={
    digimons : [
      {}
    ]
  }

  async componentDidMount(){
    const digimonsApi = await api.get('digimon')
    this.setState({digimons : digimonsApi.data})
  }
  render() {
    return (
      <>
        {this.state.digimons.map(digimon =>
         digimon.id <= 12 ?
          <Col sm={3}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {digimon.img} />
            <Card.Body>
              <Card.Title>Nome: {digimon.name}</Card.Title>
              <Card.Text>
                Level: {digimon.level}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
          </Col>
          
          : ''
        )}
        
        
      </>
    );
  }
  
}

export default CardsDigimon;

