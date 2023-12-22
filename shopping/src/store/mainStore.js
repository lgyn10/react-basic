import {configureStore} from '@reduxjs/toolkit';
import cart from './cartStore';
import user from './userStore';

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
