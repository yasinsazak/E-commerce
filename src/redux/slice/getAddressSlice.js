import {createSlice} from '@reduxjs/toolkit';

import {getAddressList} from '../../api';

export const getAddressSlice = createSlice({
  name: 'getAddress',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
  },
  extraReducers: {
    [getAddressList.pending]: state => {
      state.isLoading = true;
    },
    [getAddressList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data =
        action.payload.data !== undefined
          ? action.payload.data
          : action.payload;
      state.status = action.payload.status;
    },
    [getAddressList.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default getAddressSlice.reducer;
