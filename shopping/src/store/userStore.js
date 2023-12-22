import {createSlice} from '@reduxjs/toolkit';

// 연습용
let user = createSlice({
  name: 'user',
  initialState: {name: 'Kim', age: 20},
  reducers: {
    // 함수 선언
    changeName(state) {
      // state는 속성값
      // return { name: 'Park', age: 20 };
      state.name = 'Park';
      // immer.js가 기본으로 포함되어 위처럼 사용 가능
    },
  },
});
export const {changeName} = user.actions;
export default user;
