import React from 'react'

import fishData from '../../helpers/data/fishData';
import Fish from '../Fish/Fish';
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
    const fishComponents = this.state.fishes.map(fish => (
      <Fish key={fish.id} fish={fish}/>
    ))
    return (
      <div className="col-4 Inventory">
        <h2>Inventory</h2>
        <ul className="fishes">
          {fishComponents}
        </ul>
      </div>
    )
  }
}

export default Inventory
