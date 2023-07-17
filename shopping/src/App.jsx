import {Container, Image, Nav, Navbar} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar bg='dark' data-bs-theme='dark'>
          <Container>
            <Navbar.Brand href='#home'>GYUN-MALL</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#features'>Products</Nav.Link>
              <Nav.Link href='#pricing'>contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className='main-bg'></div>
        <div>
          <div className='prdt-container'>
            <Image className='product-img' src='/public/chalk.png' rounded />
            <Image className='product-img' src='/public/shoes.png' rounded />
            <Image className='product-img' src='/public/strap.jpg' rounded />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
