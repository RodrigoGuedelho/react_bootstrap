
import React from 'react';
import {Card, Col, Row} from 'react-bootstrap'
  export default function Footer() {

    return (
      <>  
        <br/>
       
        <footer>
          <Card bg="dark" text="white" style={{ width: '100%' }}>
          <Card.Header style= {{textAlign: "center"}}>Testando bootstrap com react</Card.Header>
          <Card.Body>
            <Card.Title style= {{textAlign: "center"}}>copyright © 2019</Card.Title>
            <Card.Text style= {{textAlign: "center"}}>
              Aqui tem varios digimons legais...
            </Card.Text>
          </Card.Body>
          </Card>
        </footer>
         
      </>
    );
};





