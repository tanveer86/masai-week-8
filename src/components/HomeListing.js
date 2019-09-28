import React from 'react';

let bikesBest = JSON.parse(localStorage.getItem('bikes'));

function HomeListing(props){

    let bestBikes = bikesBest.map((eachBest, index) => {
        if(index<8)
        return(
        <div class="col-3 mt-3 text-center">
            <div class="card p-2" >
                <img src={eachBest.bikeImage} class="card-img-top" alt={eachBest.bikeName} title={eachBest.bikeName} />
                <div class="card-body">
                    <h5 class="card-title">{eachBest.bikeName}</h5>
                    <p class="card-text font-weight-bold">Rs. {eachBest.bikePrice}</p>
                    <p class="card-text">Location: {eachBest.bikeLocation}</p>
                    <button class="btn btn-danger">Rent This Bike</button>
                </div>
            </div>
        </div>)});

    return(
        <React.Fragment>
            <div class="container p-3">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center">Gadi on Rent in Bangalore Now</h1>
                    </div>
                </div>
                <div class="row">
                    {bestBikes}
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomeListing;