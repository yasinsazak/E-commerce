import {createSlice} from '@reduxjs/toolkit';
import {toggleFavoritteProcess, getFavoritteList} from '../../api';

export const favoritteSlice = createSlice({
  name: 'favoritte',
  initialState: {
    data: undefined,
    isLoading: {
      toggleFavoritteLoading: false,
      getFavoritteLoading: false,
    },
    status: undefined,
    toggle_status: false,
    base_url: undefined,
  },
  extraReducers: {
    [toggleFavoritteProcess.pending]: state => {
      state.toggleFavoritteLoading = true;
    },
    [toggleFavoritteProcess.fulfilled]: (state, action) => {
      state.toggleFavoritteLoading = false;
      state.status = action.payload.status;
      state.toggle_status = action.payload.operation_status;
    },
    [getFavoritteList.pending]: state => {
      state.getFavoritteLoading = true;
    },
    [getFavoritteList.fulfilled]: (state, action) => {
      state.getFavoritteLoading = false;
      state.status = action.payload.status;
      state.data = action.payload.data;
      state.base_url = action.payload.image_path;
    },
  },
});

export default favoritteSlice.reducer;
