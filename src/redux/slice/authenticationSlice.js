import {createSlice} from '@reduxjs/toolkit';
import {loginProcess, logoutProcess, registerProcess} from '../../api';

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    data: undefined,
    isLoading: false,
    status: undefined,
    error: undefined,
    isSignedIn: '-1',
  },
  reducers: {
    checkSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
  },
  extraReducers: {
    [loginProcess.pending]: state => {
      state.isLoading = true;
      state.isSignedIn = '-1';
    },
    [loginProcess.fulfilled]: (state, action) => {
      state.data =
        action.payload.data !== undefined
          ? action.payload.data
          : action.payload;
      state.isLoading = false;
      state.isSignedIn = action.payload.status === 'success' ? '1' : '0';
    },
    [loginProcess.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.isLoading = false;
      state.isSignedIn = '0';
    },
    [logoutProcess.fulfilled]: state => {
      state.isSignedIn = '0';
    },
    [registerProcess.pending]: state => {
      state.isLoading = true;
    },
    [registerProcess.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.status = action.payload.status;
    },
    [registerProcess.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const {checkSignedIn} = authenticationSlice.actions;

export default authenticationSlice.reducer;
