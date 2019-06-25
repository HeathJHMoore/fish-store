import React from 'react';

import Inventory from '../Inventory/Inventory';
import NewOrder from '../NewOrder/NewOrder';
import Orders from '../Orders/Order';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div class="row">
          <Inventory />
          <NewOrder />
          <Orders />
        </div>
      </div>
    );
  }
}

export default Home