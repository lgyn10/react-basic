import {Container, Nav, Navbar} from 'react-bootstrap';
import './App.css';
import {useState} from 'react';
import * as data from './data/data'; // 확장자 생략 가능
import MdProducts from './components/MdProducts';
import {Outlet, Route, Routes, useNavigate} from 'react-router';

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
              <Nav.Link onClick={() => navigate('/cart')}>Cart</Nav.Link>
              <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
              <Nav.Link onClick={() => navigate('/event')}>Evnet</Nav.Link>
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
          <Route path='/about' element={<About />}>
            <Route path='member' element={<h4>member</h4>} />
            <Route path='location' element={<h4>location</h4>} />
          </Route>
          <Route path='/event' element={<Event />}>
            <Route path='one' element={<h4>첫 주문 시 5000원 할인</h4>} />
            <Route path='two' element={<h4>생일 기념 쿠폰</h4>} />
          </Route>
          {/* 404 not found */}
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </div>
    </>
  );
}

const About = () => {
  return (
    <>
      <h2>About Page</h2>
      <Outlet></Outlet>
    </>
  );
};

const Event = () => {
  return (
    <>
      <h2>오늘의 이벤트</h2>
      <Outlet />
    </>
  );
};

export default App;
