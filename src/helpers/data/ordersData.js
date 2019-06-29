import axios from 'axios'

import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL

const getOrders = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/orders.json?orderBy="uid"&equalTo="${uid}"`)
    .then((resp) => {
      const orders = [];
      Object.keys(resp.data).forEach((key) => {
        resp.data[key].id = key;
        orders.push(resp.data[key]);
      })
      resolve(orders);
    })
    .catch(err => reject(err))
})

const deleteOrder = (orderId) => axios.delete(`${baseUrl}/orders/${orderId}.json`);

export default { getOrders, deleteOrder };