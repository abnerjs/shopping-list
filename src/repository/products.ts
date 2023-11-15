import axios from 'axios';

const API_URL = axios.create({
  baseURL: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1',
});

API_URL.interceptors.request.use(
  (request) => {
    request.headers['accept'] = 'application/json';

    request.params = {
      ...request.params,
      page: '1',
      rows: '8',
      sortBy: 'id',
      orderBy: 'ASC',
    };

    return request;
  },
  (error) => {
    if (error.request) {
      return Promise.reject(error.request);
    }
    return Promise.reject(error.message);
  },
);

export const getProducts = async () => {
  try {
    const response = await API_URL.get('/products');
    return response.data;
  } catch (error) {
    throw new Error('GET: API Product error');
  }
};

export default API_URL;
