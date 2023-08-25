import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks, postBooks, removeBooks } from '../bookStoreApi';

const initialState = {
  bookItems: [],
  isLoading: true,
  isReady: false,
  error: undefined,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder // Get all books
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isReady = true;
        state.bookItems = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isReady = false;
        state.error = action.payload;
      }) // Post new book
      .addCase(postBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBooks.fulfilled, (state) => {
        state.isLoading = false;
        state.isReady = true;
      })
      .addCase(postBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isReady = false;
        state.error = action.payload;
      }) // Remove book
      .addCase(removeBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBooks.fulfilled, (state) => {
        state.isLoading = false;
        state.isReady = true;
      })
      .addCase(removeBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isReady = false;
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;
