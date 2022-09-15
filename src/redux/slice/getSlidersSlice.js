import {createSlice} from '@reduxjs/toolkit';

import {getSliders} from '../../api';

export const getSlidersSlice = createSlice({
  name: 'sliders',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
    base_url: undefined,
  },
  extraReducers: {
    [getSliders.pending]: state => {
      state.isLoading = true;
    },
    [getSliders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.status = action.payload.status;
      state.base_url = action.payload.image_path;
    },
    [getSliders.rejected]: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export default getSlidersSlice.reducer;
