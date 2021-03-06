/**
 * API
 * Connects to the API
 *
 * Additional librarys:
 *  - Axios
 */
import axios from 'axios';

axios.defaults.headers.common.Authorization =
  localStorage.getItem('fmpborToken') === null
    ? null
    : localStorage.getItem('fmpborToken');

const api = axios.create({
  baseURL: 'http://fmpbor.mmav.com.br/',
});

export default api;
