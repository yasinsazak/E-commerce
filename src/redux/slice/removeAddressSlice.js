import {createSlice} from '@reduxjs/toolkit';

import {removeAddressProcess} from '../../api';

export const removeAddressSlice = createSlice({
  name: 'removeAddress',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
  },
  extraReducers: {
    [removeAddressProcess.pending]: state => {
      state.isLoading = true;
    },
    [removeAddressProcess.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.status;
    },
    [removeAddressProcess.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default removeAddressSlice.reducer;
