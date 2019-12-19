import React, {Component} from 'react';
import {Card, Button, Col} from 'react-bootstrap'
// import { Container } from './styles';

class CardsProducts extends Component {
  state ={
    cards : [
      {
        imagem: '',
        title: 'Cad 1',
        text: 'O texto bem legal no card 1'
      },
      {
        imagem: '',
        title: 'Cad 2',
        text: 'O texto bem legal no card 2'
      },
      {
        imagem: '',
        title: 'Cad 3',
        text: 'O texto bem legal no card 3'
      }
    ]
  }

  render() {
    return (
      <>
        {this.state.cards.map(card =>
          <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {card.imagem} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                {card.text}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
          </Col>
        )}
        
      </>
    );
  }
  
}

export default CardsProducts;

