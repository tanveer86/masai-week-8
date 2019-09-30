import React from 'react';
import Footer from './Footer';
import Menu from './Menu';

let selectedBike = JSON.parse(localStorage.getItem('selectedBike'));
let storageBookings = JSON.parse(localStorage.getItem('bookings'));
let todayDate = new Date().toDateString();

console.log(storageBookings.length)

let customerDetails = storageBookings.map((eachCustomer, index) => {
    if(index == 0)
    return(
        <div>
            <h5>Your Details</h5>
            <p class="card-text">Your Full Name: {eachCustomer.customerName}</p>
            <p class="card-text">Registered Number: {eachCustomer.customerPhone}</p>
            <p class="card-text">Your Email ID: {eachCustomer.customerEmail}</p>
        </div>
    )
})

function Sucess(){

    return(
        <React.Fragment>
            <Menu />
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mt-5">
                        <h1>BOOKING SUCCESSFUL</h1>
                        <p class="font-weight-bold">We have sent booking conformation to your email id. Please pay at pick-up point and college your bike key.</p>
                        <p class="font-weight-bolder text-danger">Kindly Carry Your Original Driving Licience To Verify</p>

                    </div>
                </div>
            </div>
            <div class="card mb-3 mt-5">
                <div class="row no-gutters">
                    <div class="col-md-2 mt-4">
                        <img src={selectedBike.bikeImage} class="card-img" alt={selectedBike.bikeName} />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title text-center">Your Booking ID is: {selectedBike.bikePrice}</h5>
                            <div class="row">
                                <div class="col-6">
                                    <h5>Your Bike Details</h5>
                                    <p class="card-text">Bike Name: {selectedBike.bikeName}</p>
                                    <p class="card-text">Pick-Up Location: {selectedBike.bikeLocation}</p>
                                    <p class="card-text">Booking Date: {todayDate}</p>
                                </div>
                                <div class="col-6 text-right">
                                    {customerDetails}
                                </div>
                            </div>
                            <div class="mt-5 text-center">
                                <h5 class="card-title">Thank You</h5>
                                <p class="font-weight-bolder text-danger">Please Pay Rs. {selectedBike.bikePrice} at Pick-up Location</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img src="https://in.bookmyshow.com/secure/barcode/?IsImage=Y&strBarcodeType=qrcode&strBarcodeTxt=WF3K9DM&intHeight=100&intWidth=100" class="card-img" />
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Sucess;