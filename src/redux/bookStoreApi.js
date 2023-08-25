import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appId = 'U09RWuRiKew0cP6IbmTi';

const fetchBooks = createAsyncThunk('bookItems/fetchBooks', async (thunkAPI) => {
  try {
    const resp = await axios.get(`${baseURL + appId}/books`);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Sorry, something went wrong', error);
  }
});

const postBooks = createAsyncThunk('bookItems/postBooks', async ({ newBook }, thunkAPI) => {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const resp = await axios.post(`${baseURL + appId}/books`, newBook, requestOptions);
    return resp;
  } catch (error) {
    return thunkAPI.rejectWithValue('Could not post your book, please try again', error);
  }
});

const removeBooks = createAsyncThunk('bookItems/removeBooks', async ({ id }, thunkAPI) => {
  try {
    const resp = await axios.delete(`${baseURL + appId}/books/${id}`);
    return resp;
  } catch (error) {
    return thunkAPI.rejectWithValue('Could not post your book, please try again', error);
  }
});

export { fetchBooks, postBooks, removeBooks };
