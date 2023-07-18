import {Container, Image, Nav, Navbar} from 'react-bootstrap';
import './App.css';
import {useState} from 'react';
import * as data from './data/data'; // 확장자 생략 가능

function App() {
  const [products] = useState(data.serverData);
  console.log(products);

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
        <div className='main-bg-container'>
          <div className='main-bg'></div>
        </div>
        <div className='md-box'>
          <h3>MD 추천</h3>
        </div>
        <div>
          <div className='prdt-container'>
            {products.map((v) => {
              return (
                <div key={v.id}>
                  <Image className='product-img' src={v.img} rounded />
                  <h4>{v.title}</h4>
                  <p>{v.content}</p>
                  <p>가격: {v.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
