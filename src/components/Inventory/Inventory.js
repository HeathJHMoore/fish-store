import React from 'react'

import fishData from '../../helpers/data/fishData';
import './Inventory.scss';

class Inventory extends React.Component {
  state = {
    fishes: [],
  }

  componentDidMount() {
    fishData.getFishes()
      .then(fishes => this.setState({fishes}))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="col-4 Inventory">
        <h2>This is a column</h2>
        <h2>This is a column</h2>
        <h2>This is a column</h2>
      </div>
    )
  }
}

export default Inventory
