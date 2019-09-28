import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import Offers from './components/Offers';
import Header from './components/Header';
import AddBikes from './components/admin/AddBikes';
import Home from './components/Home';
import AllBikes from './components/AllBikes';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectBike: '',
    }
  }

  getAllBikes = (e) => {
    console.log(e)
  }

  render(){
    return (
      <BrowserRouter>
        <Offers />
        
        <Route path="/" exact component={Home} />
        <Route path="/addbikes" component={AddBikes} />
        <Route path="/allbikes" component={AllBikes} />
        </BrowserRouter>
    );
  }
}

export default App;