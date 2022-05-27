import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from './userSlice';

const UserView = () => {
  const { loading, characters, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <h1> Characters are</h1>
      {characters?.map((character) => {
        return (
          <>
            <h2>{character.name}</h2>
            <p>{character.gender}</p>
            <img src={character.image} alt={character.name} />
          </>
        );
      })}
      <button onClick={() => dispatch(fetchCharacters())}>
        Fetch characters
      </button>
    </>
  );
};

export default UserView;
