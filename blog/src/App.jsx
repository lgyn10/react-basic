import {useState} from 'react';
import './App.css';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState(['남자 코트 추천', '김포 맛집', '알고리즘']);
  const [cnt, setCnt] = useState(0);
  const click = () => {
    // 불변성 보장
    let tmp = [...title]; // 원본에 변형을 가하면 안됨
    tmp[0] = '여자 코트 추천';
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
      </div>
    </>
  );
}

export default App;
