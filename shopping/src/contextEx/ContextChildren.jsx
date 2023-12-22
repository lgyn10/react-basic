// 자식 컴포넌트에서 Context API 작업

import {useContext} from 'react';
import {ContextStateStorage} from './ContextParent';

const ContextChildren = () => {
  // 구조 분해 할당으로 items 변수 선언
  const {items, inventory} = useContext(ContextStateStorage);
  return (
    <>
      <div>{items}</div>
      <div>{inventory}</div>
    </>
  );
};
export default ContextChildren;
