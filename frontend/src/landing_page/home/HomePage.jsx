import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import KiteConnect from './KiteConnect';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';


function HomePage() {
    return ( 
        <>
            <Hero />
            <Awards />
            <Stats />
            <KiteConnect />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
     );
}

export default HomePage;