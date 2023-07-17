import {useState} from 'react';
import PropTypes from 'prop-types';

import './App.css';

function App() {
  const [modal, setModal] = useState(false);
  const modalOpen = () => setModal(true);
  return (
    <>
      <article>
        <h3>Modal Button</h3>
        <p>props test</p>
        <button onClick={modalOpen}>모달창 열기</button>
      </article>
      {modal ? <Modal setModal={setModal} modal={modal} /> : null}
    </>
  );
}
const Modal = ({modal, setModal}) => {
  const modalClose = () => setModal(!modal);
  return (
    <div className='modal-container'>
      <article className='modal'>
        <h3>모달창 입니다</h3>
        <button onClick={modalClose}>닫기</button>
      </article>
    </div>
  );
};
Modal.propTypes = {
  setModal: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
};
export default App;
