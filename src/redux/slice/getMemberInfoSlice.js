import {createSlice} from '@reduxjs/toolkit';

import {getMemberInfo} from '../../api';

export const getMemberInfoSlice = createSlice({
  name: 'memberInfo',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
  },
  extraReducers: {
    [getMemberInfo.pending]: state => {
      state.isLoading = true;
    },
    [getMemberInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.status = action.payload.status;
    },
    [getMemberInfo.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default getMemberInfoSlice.reducer;
