import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";

function AllBikes(props){

    let showAllBikes = props.showbikes.map(eachBest => 
        
        <div class="col-3 mt-3 text-center">
            <div class="card p-2" >
                <img src={eachBest.bikeImage} class="card-img-top" alt={eachBest.bikeName} title={eachBest.bikeName} />
                <div class="card-body">
                    <h5 class="card-title">{eachBest.bikeName}</h5>
                    <p class="card-text font-weight-bold">Per Day: Rs. {eachBest.bikePrice}</p>
                    <p class="card-text">Location: {eachBest.bikeLocation}</p>
                    <Link to={`${props.match.url}/${eachBest.bikeName}`}><button class="btn btn-danger">Rent This Bike</button></Link>
                </div>
            </div>
        </div>);

    return(
        <React.Fragment>
            <div class="container p-3">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center">Gadi on Rent in Bangalore Now</h1>
                    </div>
                </div>
                <div class="row">
                    {showAllBikes}
                </div>
            </div>
        </React.Fragment>
    )
}

export default AllBikes;