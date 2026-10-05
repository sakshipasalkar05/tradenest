import React from 'react'
import Hero from './Hero';
import LeftSupport from './LeftSupport';
import RightSupport from './RightSupport';


function SupportPage() {
    return ( 
        <>
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <LeftSupport />
                    </div>
                    <div className="col-lg-4">
                        <RightSupport />
                    </div>
                </div>
            </div>
        </>
     );
}

export default SupportPage;