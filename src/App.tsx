import React from 'react';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React-With-Bootstrap5</Navbar.Brand>
        </Container>
        <Nav.Link href='https://github.com/MogamiTsuchikawa/react-with-bootstrap5-template'>
          GitHub
        </Nav.Link>
      </Navbar>
      <Container>
        <Row>
          <h2>Hello, World</h2>
        </Row>
      </Container>
    </>
  );
}

export default App;
