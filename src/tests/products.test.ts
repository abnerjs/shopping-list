import axios, { AxiosRequestConfig } from 'axios';

import getProducts from '../repository/products';
import API_URL from '../repository/products';

describe('Products API', () => {
  test('should return an array of products', async () => {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: API_URL.defaults.baseURL + '/products',
    };
    const products = await getProducts(config);

    expect(products).toBeDefined();
    expect(Array.isArray(products)).toBeTruthy();
  });
});
