import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://eticaret.demo.pigasoft.com/apiv1/';
const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers['X-API-KEY'] = API_KEY;
axios.defaults.headers['Content-Type'] = 'multipart/form-data';

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

export {
  getSliders,
  getBrandsSliders,
  getMainProducts,
  getFirstCategories,
  getSecondCategories,
  getThirdCategories,
};
