import React from 'react'

function RightSupport() {
    return ( 
        <div className="container p-0">
            <div className="p-3 border-start border-warning border-5 mb-4" style={{ backgroundColor: "#fff8e7" }}>
                <ul className="m-0 ps-3">
                    <li className="mb-2"><a href="/" style={{color: "rgb(49, 107, 240)"}}>Current Buybacks - August 2026</a></li>
                    <li><a href="/" style={{color: "rgb(49, 107, 240)"}}>Surveillance measure on scrips - August 2026</a></li>
                </ul>
            </div>

            <ul className="list-group rounded-0">
                <li className="list-group-item bg-body-tertiary fw-medium">Quick links</li>
                <li className="list-group-item"><a href="/" style={{textDecoration:"none", color: "rgb(49, 107, 240)"}}>1. Track account opening</a></li>
                <li className="list-group-item"><a href="/" style={{textDecoration:"none", color: "rgb(49, 107, 240)"}}>2. Track segment activation</a></li>
                <li className="list-group-item"><a href="/" style={{textDecoration:"none", color: "rgb(49, 107, 240)"}}>3. Intraday margins</a></li>
                <li className="list-group-item"><a href="/" style={{textDecoration:"none", color: "rgb(49, 107, 240)"}}>4. Kite user manual</a></li>
                <li className="list-group-item"><a href="/" style={{textDecoration:"none", color: "rgb(49, 107, 240)"}}>5. Learn how to create a ticket</a></li>
            </ul>
        </div>
     );
}

export default RightSupport;