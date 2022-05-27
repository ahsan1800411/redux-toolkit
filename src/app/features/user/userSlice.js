import axios from 'axios';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const fetchCharacters = createAsyncThunk('user/characters', async () => {
  try {
    const { data } = await axios('https://rickandmortyapi.com/api/character');
    const { results } = data;
    return results;
  } catch (error) {
    return error?.response;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  extraReducers: (builders) => {
    builders.addCase(fetchCharacters.pending, (state, action) => {
      state.loading = true;
      state.characters = [];
      state.error = '';
    });
    builders.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.characters = action.payload;
      state.error = '';
    });
    builders.addCase(fetchCharacters.rejected, (state, action) => {
      state.loading = false;
      state.characters = [];
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
