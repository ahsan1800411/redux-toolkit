import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import store from '../../store';
import { ordered, restocked } from './cakeSlice';

const CakeView = () => {
  const { numOfCakes } = useSelector((state) => state.cake);
  const dispatch = useDispatch();

  //   console.log(store.getState().cake);
  return (
    <>
      <h1>Number of Cakes is : {numOfCakes}</h1>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(1))}>Restock Cake</button>
    </>
  );
};

export default CakeView;
