import {useState} from 'react';
import './App.css';
import PropTypes from 'prop-types';

function App() {
  const [title, setTitle] = useState(['도서 추천', '김포 맛집', '알고리즘']);
  const [cnt, setCnt] = useState(0);
  const [modal, setModal] = useState(false);

  const click = () => {
    // 불변성 보장
    let tmp = [...title]; // 원본에 변형을 가하면 안됨
    tmp[0] = '강의 추천';
    setTitle(tmp);
    setCnt((prev) => prev + 1);
    console.log(cnt);
  };
  function sorting() {
    let tmp2 = [...title];
    tmp2.sort((p1, p2) => p1.localeCompare(p2));
    console.log(tmp2);
    setTitle(tmp2);
  }
  const modalUp = () => {
    // document.querySelector('.modal-container').classList.toggle('show');
    setModal(true);
  };

  return (
    <>
      <div className='App'>
        <div className='black-nav'>
          {/* {color:color} -> 작동 안함  */}
          <h3>BLOG</h3>
        </div>
        <div className='list'>
          <h3>
            {title[0]}
            <span style={{cursor: 'pointer'}} onClick={click}>
              😎
            </span>
            {cnt}
          </h3>
          <p>7월 14일 발행</p>
        </div>
        <div className='list'>
          <h3>{title[1]}</h3>
          <p>7월 14일 발행</p>
        </div>
        <div className='list'>
          <h3>{title[2]}</h3>
          <p>7월 14일 발행</p>
        </div>
        <button onClick={sorting}>정렬</button>
        {modal ? <Modal modal={modal} setModal={setModal} /> : null}
        <button onClick={modalUp}>모달창 열기</button>
      </div>
    </>
  );
}

const Modal = ({modal, setModal}) => {
  const modalDown = () => {
    // document.querySelector('.modal-container').classList.toggle('show');
    setModal(!modal);
  };
  return (
    <>
      <div className='modal-container'>
        <div className='modal'>
          <h3>제목</h3>
          <p>날씨</p>
          <p>상세내용</p>
          <button onClick={modalDown}>X</button>
        </div>
      </div>
    </>
  );
};
Modal.propTypes = {
  setModal: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
};
export default App;
