import React from 'react';
import NavBar from './components/NavBar';
import CarouselHome from './components/CarouselHome';
import CardsProducts from './components/CardsProducts';
import CardsDigimon from './components/CardsDigimon';
import Footer from './components/Footer';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    
    <>
      <NavBar />
      <CarouselHome />
      <br />
      <br />
      
      <Container>
        <Row><CardsProducts /></Row>
        <br />
        <br />
        <Row><CardsDigimon /></Row>
      </Container> 
      <Footer />
    </>
  );
}

export default App;
