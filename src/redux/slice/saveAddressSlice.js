import {createSlice} from '@reduxjs/toolkit';

import {saveAddressProcess} from '../../api';

export const saveAddressSlice = createSlice({
  name: 'saveAddress',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
  },
  extraReducers: {
    [saveAddressProcess.pending]: state => {
      state.isLoading = true;
    },
    [saveAddressProcess.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data =
        action.payload.data !== undefined
          ? action.payload.data
          : action.payload;
      state.status = action.payload.status;
    },
    [saveAddressProcess.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default saveAddressSlice.reducer;
