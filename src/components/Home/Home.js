import React from 'react';
import firebase from 'firebase/app'
import 'firebase/auth';


import ordersData from '../../helpers/data/ordersData';
import fishData from '../../helpers/data/fishData';
import Inventory from '../Inventory/Inventory';
import NewOrder from '../NewOrder/NewOrder';
import Orders from '../Orders/Order';

import './Home.scss';

class Home extends React.Component {
  state = {
    orders: [],
    fishes: [],
    fishOrder: {},
  }

  getOrders = () => {
    ordersData.getOrders(firebase.auth().currentUser.uid)
      .then(orders => this.setState({orders}))
      .catch(err => console.error(err))
  }

  componentDidMount() {
    fishData.getFishes()
      .then(fishes => this.setState({fishes}))
      .catch(err => console.error(err))

    this.getOrders();
  }

  deleteOrder = (orderId) => {
    ordersData.deleteOrder(orderId)
      .then(() => this.getOrders())
      .catch(console.error('didnt delete'))
  }

  addFishToOrder = (fishId) => {
    console.error('fish Id in HOME', fishId);
    const fishOrderCopy = {...this.state.fishOrder}
    fishOrderCopy[fishId] = fishOrderCopy[fishId] + 1 || 1;
    this.setState({fishOrder: fishOrderCopy})
  }

  removeFromOrder = (fishId) => {
    const fishOrderCopy = {...this.state.fishOrder}
    delete fishOrderCopy[fishId];
    this.setState({fishOrder: fishOrderCopy});
  }

  render() {
    const {fishes} = this.state;
    const {orders} = this.state;
    return (
      <div className="Home">
          <div className="row">
            <Inventory fishes={fishes}addFishToOrder={this.addFishToOrder}/>
            <NewOrder fishOrder={this.state.fishOrder} fishes={this.state.fishes} removeFromOrder={this.removeFromOrder}/>
            <Orders orders={orders} deleteOrder={this.deleteOrder}/>
          </div>
      </div>
    );
  }
}

export default Home