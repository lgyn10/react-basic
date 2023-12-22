// 부모 컴포넌트에서의 Context API 작업

import {React} from 'react';
import {useState} from 'react';
import ContextChildren from './ContextChildren';
export let ContextStateStorage = React.createContext();

const ContextParent = () => {
  const [inventory] = useState([]);
  const [items] = useState([1, 2, 3, 5, 6]);
  return (
    <>
      <ContextStateStorage.Provider value={{inventory, items}}>
        <ContextChildren storage={inventory} />
      </ContextStateStorage.Provider>
    </>
  );
};
export default ContextParent;
