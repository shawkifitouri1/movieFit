
import axios from "axios";
import * as constants from "../../backend/constants";

// import { axios } from '../../backend/contextProviders/authContext';
const BASE_URL = constants.BASEURL;

export const httpService = {
  get(endpoint, data) {
    return ajax(endpoint, 'GET', data);
  },
  post(endpoint, data) {
    return ajax(endpoint, 'POST', data);
  },
  put(endpoint, data) {
    return ajax(endpoint, 'PUT', data);
  },
  delete(endpoint, data) {
    return ajax(endpoint, 'DELETE', data);
  },
  async getFromApi(endpoint) {
    const res = await axios.get(endpoint)
    return res.data
  }
};

async function ajax(endpoint, method = 'GET', data = null) {
  try {
    const res = await axios({
      url: endpoint,
      method,
      data,
      params: method === 'GET' ? data : null,
    });
    return res.data;
  } catch (err) {
  
    console.log(
      err.response
    );
    throw err;
  }
}
 