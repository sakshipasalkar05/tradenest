import React from 'react'

function OptionalCharges() {
    return ( 
        <div className="container my-5">
            <h1>Charges for optional value added services</h1>
            <table class="table table-striped border mt-3">
                <thead>
                    <tr>
                        <th className="py-3">Service</th>
                        <th className="py-3">Billing Frequency</th>
                        <th className="py-3">Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tickertape</td>
                        <td>Monthly / Quarterly / Annual</td>
                        <td>Free: 0 | Pro: 249/699/2399</td>
                    </tr>
                    <tr>
                        <td>Smallcase</td>
                        <td>Per transaction</td>
                        <td>Buy & Invest More: 100 | SIP: 10</td>
                    </tr>
                    <tr>
                        <td>Kite Connect	</td>
                        <td>Monthly</td>
                        <td>Connect: 500 | Personal: Free</td>
                    </tr>
                </tbody>
            </table><br /><br />
        </div>
     );
}

export default OptionalCharges;