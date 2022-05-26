import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from './features/cakes/cakeSlice';
import icecreamReducer from './features/icecream/icecreamSlice';

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
});

export default store;