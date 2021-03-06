import React from 'react'
import PropTypes from 'prop-types';

import OrderRow from '../OrderRow/OrderRow';
import orderShapes from '../../helpers/propz/orderShapes';

import './Order.scss';

class Order extends React.Component {
  static propTypes = {
    orders: PropTypes.arrayOf(orderShapes.orderShape),
    deleteOrder: PropTypes.func.isRequired
  }
  
  render() {
    const orderComponents = this.props.orders.map((order) => (
      <OrderRow key={order.id} order={order} deleteOrder={this.props.deleteOrder}/>
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
