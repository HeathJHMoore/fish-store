import React from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';

import ordersData from '../../helpers/data/ordersData';
import OrderRow from '../OrderRow/OrderRow';

import './Order.scss';

class Order extends React.Component {
  state = {
    orders: []
  }

  componentDidMount() {
    ordersData.getOrders(firebase.auth().currentUser.uid)
      .then(orders => this.setState({orders}))
      .catch(err => console.error(err))
  }

  render() {
    const orderComponents = this.state.orders.map((order) => (
      <OrderRow key={order.id} order={order} />
    ))
    return (
      <div className="col-4 Order">
              <div className="Orders">
        <h2>Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order Name</th>
              <th scope="col">Date</th>
              <th scope="col"># Fish</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {orderComponents}
          </tbody>
        </table>
      </div>
      </div>
    )
  }
}

export default Order;
