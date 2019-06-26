import axios from 'axios'

import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL

const getFishes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/fishes.json`)
    .then((resp) => {
      const fishes = [];
      Object.keys(resp.data).forEach((key) => {
        resp.data[key].id = key;
        fishes.push(resp.data[key]);
      })
      resolve(fishes);
    })
    .catch(err => reject(err))
})

export default { getFishes };
