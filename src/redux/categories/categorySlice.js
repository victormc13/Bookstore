import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryList: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.categoryList = 'Under construction';
    },
  },
});

export const { status } = categorySlice.actions;

export default categorySlice.reducer;
