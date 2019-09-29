import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import Offers from './components/Offers';
import Header from './components/Header';
import AddBikes from './components/admin/AddBikes';
import Home from './components/Home';
import AllBikes from './components/AllBikes';
import BikeDetail from './components/BikeDetail';
import Booking from './components/Booking';
import Sucess from './components/Success';

let allStorageBikes = JSON.parse(localStorage.getItem('bikes'));

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectBike: '',
    }
  }

  render(){
    return (
      <BrowserRouter>
        <Offers />
        
        <Route path="/" exact render={(props) => {return <Home homebikes={allStorageBikes} {...props} />;}} />
        <Route path="/allbikes" exact render={props => {return <AllBikes showbikes={allStorageBikes} {...props} />; }} />
        <Route path="/allbikes/:bikeName" exact render={props => <BikeDetail showbikes={allStorageBikes} {...props} />} />
        <Route path="/booking" component={Booking} />
        <Route path="/sucess" component={Sucess} />
        <Route path="/addbikes" component={AddBikes} />
        </BrowserRouter>
    );
  }
}

export default App;