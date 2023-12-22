import {createSlice} from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [
    {id: 3, title: 'White and Black', count: 2},
    {id: 5, title: 'Grey Yordan', count: 1},
  ],
  reducers: {
    increaseCnt(state, action) {
      // action.payload에 전달값 있음

      let id = action.payload; // payload가 index 값임
      return state.map((item) => (item.id === id ? {...item, count: item.count + 1} : item));
    },
    decreaseCnt(state, action) {
      let id = action.payload;
      return state.map((item) => (item.id === id ? {...item, count: item.count == 1 ? 1 : item.count - 1} : item));
    },
    addToCart(state, action) {
      let product = action.payload;
      if (state.some((v) => v.id === product.id)) {
        return state;
        // dispatch(action.increaseCnt(product.id)) -> 같은 파일 내에서 increaseCnt 함수 쓰는 법 연구
      } else {
        return [...state, {id: product.id, title: product.title, count: 1}];
      }
    },
  },
});

export default cart;
export let {increaseCnt, decreaseCnt, addToCart} = cart.actions;
