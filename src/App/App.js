import React from 'react';
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Inventory from '../components/Inventory/Inventory';
import NewOrder from '../components/NewOrder/NewOrder';
import Orders from '../components/Orders/Order';

import fbConnection from '../helpers/data/connection';
fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false})
      }
    })
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <Home />;
      }
      return <Auth />
    };
    return (
      <div className="App">
        <MyNavbar authed= {authed}/>
      {loadComponent()};
      </div>
    )
  }
}

export default App;
