import {Container, Nav, Navbar} from 'react-bootstrap';
import './App.css';
import {useState} from 'react';
import * as data from './data/data'; // 확장자 생략 가능
import MdProducts from './components/MdProducts';
import {Route, Routes, useNavigate} from 'react-router';

function App() {
  const [products] = useState(data.default);
  console.log(products);
  let navigate = useNavigate();
  return (
    <>
      <div className='App'>
        <Navbar bg='dark' data-bs-theme='dark'>
          <Container>
            <Navbar.Brand onClick={() => navigate('/')}>GYUN-MALL</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link onClick={() => navigate('/home')}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate('/cart')}>cart</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <div className='main-bg-container'>
                  <div className='main-bg'></div>
                  <div className='md-box'>
                    <h3>MD 추천</h3>
                  </div>
                  <div className='prdt-container'>
                    {products.map((v) => {
                      return <MdProducts key={v.id} product={v} />;
                    })}
                  </div>
                </div>
              </>
            }
          />
          <Route path='/home' element={<h3>home</h3>} />
          <Route path='/cart' element={<div>cart</div>} />
          {/* 404 not found */}
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
