import axios from 'axios';
import applyConverters from 'axios-case-converter';

const baseClient = applyConverters(axios.create({
  baseURL: 'base_url',
  headers: {
    Accept: 'application/json',
  },
}));

export default baseClient;
