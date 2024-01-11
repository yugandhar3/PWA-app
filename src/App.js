import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import User from './Pages/User';

function App() {
  return (

    <BrowserRouter>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/user">User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
