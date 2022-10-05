import {createSlice} from '@reduxjs/toolkit';
import {addBasket, deleteBasket, getBasket, editBasket} from '../../api';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    status: undefined,
    addStatus: undefined,
    data: undefined,
    total: undefined,
    getResponse: undefined,
    isLoading: {
      addBasketLoading: undefined,
      editBasketLoading: undefined,
    },
    error: undefined,
  },
  extraReducers: {
    [addBasket.pending]: state => {
      state.addBasketLoading = true;
    },
    [addBasket.fulfilled]: (state, action) => {
      state.addBasketLoading = false;
      state.data = action.payload.data;
      state.addStatus = action.payload.status;
    },
    [addBasket.rejected]: (state, action) => {
      state.addBasketLoading = false;
    },
    [deleteBasket.pending]: state => {
      state.isLoading = true;
    },
    [deleteBasket.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.status;
    },
    [deleteBasket.rejected]: state => {
      state.isLoading = false;
    },
    [editBasket.pending]: state => {
      state.editBasketLoading = true;
    },
    [editBasket.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.editBasketLoading = false;
      state.status = action.payload.status;
    },
    [editBasket.rejected]: state => {
      state.editTodo = false;
    },
    [getBasket.pending]: state => {
      state.isLoading = true;
    },
    [getBasket.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.getResponse = action.payload.data;
      state.total = action.payload.total;
    },
    [getBasket.rejected]: state => {
      state.getBasketLoading = false;
    },
  },
});

export default basketSlice.reducer;
