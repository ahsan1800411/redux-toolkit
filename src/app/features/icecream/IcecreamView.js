import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

const IcecreamView = () => {
  const dispatch = useDispatch();
  const { numOfIcecreams } = useSelector((state) => state.icecream);
  return (
    <>
      <h2>Number of Icecreams :{numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked())}>Restock Cake</button>
    </>
  );
};

export default IcecreamView;
