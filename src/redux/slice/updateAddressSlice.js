import {createSlice} from '@reduxjs/toolkit';

import {updateAddressProcess} from '../../api';

export const updateAddressSlice = createSlice({
  name: 'updateAddress',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
  },
  extraReducers: {
    [updateAddressProcess.pending]: state => {
      state.isLoading = true;
    },
    [updateAddressProcess.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.status;
    },
    [updateAddressProcess.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default updateAddressSlice.reducer;
