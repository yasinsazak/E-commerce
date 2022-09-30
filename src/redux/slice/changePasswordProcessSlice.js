import {createSlice} from '@reduxjs/toolkit';

import {changePasswordProcess} from '../../api';

export const changePasswordSlice = createSlice({
  name: 'changePassword',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
  },
  extraReducers: {
    [changePasswordProcess.pending]: state => {
      state.isLoading = true;
    },
    [changePasswordProcess.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data =
        action.paylaod.data !== undefined
          ? action.paylaod.data
          : action.paylaod;
      state.status = action.paylaod.status;
    },
    [changePasswordProcess.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default changePasswordSlice.reducer;
