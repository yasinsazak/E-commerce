import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://eticaret.demo.pigasoft.com/apiv1/';
const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers['X-API-KEY'] = API_KEY;
axios.defaults.headers['Content-Type'] = 'multipart/form-data';

const loginProcess = createAsyncThunk(
  'authentication/loginProcess',
  async data => {
    const {email, password} = data;
    const params = new FormData();
    params.append('email', email);
    params.append('password', password);
    try {
      const res = await axios.post('login', params);
      res.data !== undefined &&
        AsyncStorage.setItem('@USERDATA', JSON.stringify(data));
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const logoutProcess = createAsyncThunk(
  'authentication/logoutProcess',
  async () => {
    try {
      const res = await axios.get('logout');
      AsyncStorage.removeItem('@USERDATA');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const addBasket = createAsyncThunk('basket/addBasket', async data => {
  const {product_id, qty} = data;
  const params = new FormData();
  params.append('product_id', product_id);
  params.append('qty', qty);
  try {
    const res = await axios.post('addBasket', params);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const editBasket = createAsyncThunk(
  'basket/editBasket',
  async (data, thunkAPI) => {
    const {rowID, qty} = data;
    const params = new FormData();
    params.append('rowID', rowID);
    try {
      const res = await axios.post('updateCart', params);
      thunkAPI.dispatch(getBasket());
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const deleteBasket = createAsyncThunk(
  'basket/deleteBasket',
  async (data, thunkAPI) => {
    const {rowID} = data;
    const params = new FormData();
    params.append('rowID', rowID);
    try {
      const res = await axios.post('removeFromCart', params);
      thunkAPI.dispatch(getBasket());
      return res.data;
    } catch (error) {
      console.log(error);
    }
    params;
  },
);

const getBasket = createAsyncThunk('basket/getBasket', async () => {
  try {
    const res = await axios.get('getBasket');
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const getSliders = createAsyncThunk('sliders/getSliders', async () => {
  try {
    const res = await axios.get('sliders');
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const getBrandsSliders = createAsyncThunk(
  'brands/getBrandsSliders',
  async () => {
    try {
      const res = await axios.get('brands');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const getMainProducts = createAsyncThunk(
  'mainProducts/getMainProducts',
  async () => {
    try {
      const res = await axios.get('mainProducts');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const getFirstCategories = createAsyncThunk(
  'firstCategories/getFirstCategories',
  async () => {
    try {
      const res = await axios.get('firstCategories');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const getSecondCategories = createAsyncThunk(
  'secondCategories/getSecondCategories',
  async data => {
    const {first_category_id} = data;
    const params = new FormData();
    params.append('first_category_id', first_category_id);
    try {
      const res = await axios.post('secondCategories', params);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const getThirdCategories = createAsyncThunk(
  'thirdCategories/getThirdCategories',
  async data => {
    const {second_category_id} = data;
    const params = new FormData();
    params.append('second_category_id', second_category_id);
    try {
      const res = await axios.post('thirdCategories', params);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const getProducts = createAsyncThunk('productList/getProducts', async data => {
  const {category_id, category, per_page, page} = data;
  const params = new FormData();
  params.append('category_id', category_id);
  params.append('category', category);
  params.append('per_page', per_page);
  params.append('page', page);

  try {
    const res = await axios.post('productList', params);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const getProductDetails = createAsyncThunk(
  'productDetail/getProductDetails',
  async data => {
    const {product_id} = data;
    const params = new FormData();
    params.append('product_id', product_id);
    try {
      const res = await axios.post('productDetail', params);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export {
  loginProcess,
  logoutProcess,
  addBasket,
  getBasket,
  deleteBasket,
  editBasket,
  getSliders,
  getBrandsSliders,
  getMainProducts,
  getFirstCategories,
  getSecondCategories,
  getThirdCategories,
  getProducts,
  getProductDetails,
};
