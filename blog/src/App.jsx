import {useState} from 'react';
import './App.css';
import PropTypes from 'prop-types';

// 부모 컴포넌트
function App() {
  const [title, setTitle] = useState(['도서 추천', '김포 맛집', '알고리즘']);
  const [cnt, setCnt] = useState([0, 0, 0]);
  const [index, setIndex] = useState(-1);
  const [modal, setModal] = useState(false);
  const [tmpString, setTmpString] = useState('');

  const click = (i) => {
    // 불변성 보장
    let tmp = [...title]; // 원본에 변형을 가하면 안됨
    if (!i) tmp[0] = '강의 추천';
    setTitle(tmp);
    let cntTmp = [...cnt];
    cntTmp[i] += 1;
    setCnt(cntTmp);
  };
  // 가나다순 정렬
  function sorting() {
    let tmp2 = [...title];
    tmp2.sort((p1, p2) => p1.localeCompare(p2));
    console.log(tmp2);
    setTitle(tmp2);
  }
  const modalUp = (i) => {
    // document.querySelector('.modal-container').classList.toggle('show');
    setModal(true);
    setIndex(i);
  };

  return (
    <>
      <div className='App'>
        <div className='black-nav'>
          <h3>BLOG</h3>
        </div>
        {title.map((v, i) => {
          return (
            <div className='list' key={i}>
              <h3 onClick={() => modalUp(i)} style={{cursor: 'pointer'}}>
                {v}
                <span
                  className='likeBtn'
                  onClick={(e) => {
                    e.stopPropagation(); // 이벤트 버블링 막기
                    click(i);
                  }}
                >
                  ♥️
                </span>
                {cnt[i]}
              </h3>
              <p>7월 14일 발행</p>
            </div>
          );
        })}
        <button onClick={sorting}>정렬</button>
        {modal ? (
          <Modal index={index} cnt={cnt} title={title} setTitle={setTitle} modal={modal} setModal={setModal} />
        ) : null}
        <button onClick={modalUp}>모달창 열기</button>
        {/* 신규 생성 */}
        <div className='input'>
          <input
            type='text'
            onChange={(e) => {
              setTmpString(e.target.value);
              console.log(tmpString);
            }}
            onKeyDown={(e) => {
              if (window.event.keyCode == 13) {
                let newTitle = [...title, tmpString];
                setTitle(newTitle);
                setCnt([...cnt, 0]);
                setTmpString('');
                e.target.value = '';
              }
            }}
          />
          <button
            onClick={(e) => {
              let newTitle = [...title, tmpString];
              setTitle(newTitle);
              setCnt([...cnt, 0]);
              setTmpString('');
              e.target.parentNode.querySelector('input').value = '';
            }}
          >
            전송
          </button>
        </div>
      </div>
    </>
  );
}

// 자식 컴포넌트
const Modal = (props) => {
  const modalDown = () => {
    // document.querySelector('.modal-container').classList.toggle('show');
    props.setModal(!props.modal); // 애니메이션 주기 어려움 (react-transition-group)
  };
  return (
    <>
      <div className='modal-container'>
        <div className='modal'>
          <h3>{props.title[props.index]}</h3>
          <p>좋아요: {props.cnt[props.index]}</p>
          <p>상세내용</p>
          <button
            onClick={() => {
              let tmp = [...props.title];
              tmp[0] = '강의 추천';
              props.setTitle(tmp);
            }}
          >
            제목 변경
          </button>
          <button onClick={modalDown}>X</button>
        </div>
      </div>
    </>
  );
};
// 타입 검사
Modal.propTypes = {
  setTitle: PropTypes.func.isRequired,
  cnt: PropTypes.array.isRequired,
  setModal: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.array.isRequired,
};
export default App;
