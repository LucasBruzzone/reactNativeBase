import baseClient from './baseClient';

export const exampleApiCall = (param1, param2) =>
  baseClient.post('route', {
    param1,
    param2,
  })
    .then(({ data }) => data);

export default {
  exampleApiCall,
};
