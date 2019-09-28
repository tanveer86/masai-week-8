import React from 'react';
import Header from './Header';
import HomeListing from './HomeListing';
import Homeintro from './HomeIntro';
import Footer from './Footer';

function Home (){
    return(
        <div>
            <Header />
            <HomeListing />
            <Homeintro />
            <Footer />
        </div>
    )
}

export default Home;