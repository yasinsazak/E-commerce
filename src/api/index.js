import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'https://eticaret.demo.pigasoft.com/apiv1/';
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

const registerProcess = createAsyncThunk(
  'authentication/registerProcess',
  async data => {
    const {email, password, telephone, name} = data;
    const params = new FormData();
    params.append('email', email);
    params.append('password', password);
    params.append('telephone', telephone);
    params.append('name', name);
    try {
      const res = await axios.post('register', params);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const changePasswordProcess = createAsyncThunk(
  'changePassword/changePasswordProcess',
  async data => {
    const {old_password, new_password} = data;
    const params = new FormData();
    params.append('old_password', old_password);
    params.append('new_password', new_password);
    try {
      const res = await axios.post('changePassword', params);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const getMemberInfo = createAsyncThunk('memberInfo/getMemberInfo', async () => {
  try {
    const res = await axios.get('memberInfo');
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const getCityProcess = createAsyncThunk('getCity/getCityProcess', async () => {
  try {
    const res = await axios.get('city');
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const getTownProcess = createAsyncThunk(
  'getTown/getTownProcess',
  async data => {
    const {city_id} = data;
    const params = new FormData();
    params.append('city_id', city_id);
    try {
      const res = await axios.post('town', params);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const getAddressList = createAsyncThunk(
  'getAddress/getAddressList',
  async () => {
    try {
      const res = await axios.get('address');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const saveAddressProcess = createAsyncThunk(
  'saveAddress/saveAddressProcess',
  async data => {
    const {
      name,
      surname,
      email,
      telephone,
      city,
      town,
      clear_address,
      billing_name,
      billing_surname,
      billing_email,
      billing_telephone,
      billing_city,
      billing_town,
      billing_clear_address,
    } = data;
    const params = new FormData();
    params.append('name', name);
    params.append('surname', surname);
    params.append('email', email);
    params.append('telephone', telephone);
    params.append('city', city);
    params.append('town', town);
    params.append('clear_address', clear_address);
    params.append('billing_name', billing_name);
    params.append('billing_surname', billing_surname);
    params.append('billing_email', billing_email);
    params.append('billing_telephone', billing_telephone);
    params.append('billing_city', billing_city);
    params.append('billing_town', billing_town);
    params.append('billing_clear_address', billing_clear_address);
    try {
      const res = await axios.post('save_address', params);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const updateAddressProcess = createAsyncThunk(
  'updateAddress/updateAddressProcess',
  async data => {
    const {
      name,
      surname,
      email,
      telephone,
      city,
      town,
      clear_address,
      billing_name,
      billing_surname,
      billing_email,
      billing_telephone,
      billing_city,
      billing_town,
      billing_clear_address,
      address_id,
    } = data;
    const params = new FormData();
    params.append('name', name);
    params.append('surname', surname);
    params.append('email', email);
    params.append('telephone', telephone);
    params.append('city', city);
    params.append('town', town);
    params.append('clear_address', clear_address);
    params.append('billing_name', billing_name);
    params.append('billing_surname', billing_surname);
    params.append('billing_email', billing_email);
    params.append('billing_telephone', billing_telephone);
    params.append('billing_city', billing_city);
    params.append('billing_town', billing_town);
    params.append('billing_clear_address', billing_clear_address);
    params.append('address_id', address_id);
    try {
      const res = await axios.post('updateAddress', params);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const removeAddressProcess = createAsyncThunk(
  'removeAddress/removeAddressProcess',
  async (data, thunkAPI) => {
    const {address_id} = data;
    const params = new FormData();
    params.append('address_id', address_id);
    try {
      const res = await axios.post('removeAddress', params);
      thunkAPI.dispatch(getAddressList());
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const toggleFavoritteProcess = createAsyncThunk(
  'favoritte/toggleFavoritteProcess',
  async (data, thunkAPI) => {
    const {product_id} = data;
    const params = new FormData();
    params.append('product_id', product_id);
    try {
      const res = await axios.post('toggleFavoritte', params);
      thunkAPI.dispatch(getFavoritteList());
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const getFavoritteList = createAsyncThunk(
  'favoritte/getFavoritteList',
  async () => {
    try {
      const res = await axios.get('favoritte');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const addBasket = createAsyncThunk(
  'basket/addBasket',
  async (data, thunkAPI) => {
    const {product_id, qty} = data;
    const params = new FormData();
    params.append('product_id', product_id);
    params.append('qty', qty);
    try {
      const res = await axios.post('addBasket', params);
      thunkAPI.dispatch(getBasket());
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const editBasket = createAsyncThunk(
  'basket/editBasket',
  async (data, thunkAPI) => {
    const {rowID, qty} = data;
    const params = new FormData();
    params.append('rowID', rowID);
    params.append('qty', qty);
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

const getBrandProductList = createAsyncThunk(
  'brandProductList/getBrandProductList',
  async data => {
    const {page, per_page, brand_id, sorting} = data;
    const params = new FormData();
    params.append('page', page);
    params.append('per_page', per_page);
    params.append('brand_id', brand_id);
    try {
      const res = await axios.post('brandProductList', params);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

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

const searchProductProcess = createAsyncThunk(
  'searchProduct/searchProductProcess',
  async data => {
    const {keywords, page, per_page} = data;
    const params = new FormData();
    params.append('keywords', keywords);
    params.append('page', page);
    params.append('per_page', per_page);
    try {
      const res = await axios.post('searchProduct', params);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export {
  loginProcess,
  logoutProcess,
  registerProcess,
  changePasswordProcess,
  getCityProcess,
  getTownProcess,
  getAddressList,
  saveAddressProcess,
  updateAddressProcess,
  removeAddressProcess,
  toggleFavoritteProcess,
  getFavoritteList,
  getMemberInfo,
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
  getBrandProductList,
  getProductDetails,
  searchProductProcess,
};
