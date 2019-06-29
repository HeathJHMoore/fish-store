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
    fishes: []
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

  render() {
    const {fishes} = this.state;
    const {orders} = this.state;
    return (
      <div className="Home">
          <div className="row">
            <Inventory fishes={fishes}/>
            <NewOrder />
            <Orders orders={orders} deleteOrder={this.deleteOrder}/>
          </div>
      </div>
    );
  }
}

export default Home