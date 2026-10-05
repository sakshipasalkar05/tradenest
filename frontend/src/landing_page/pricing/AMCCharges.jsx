import React from 'react'

function AMCCharges() {
    return ( 
        <div className="container my-5">
            <h1>Demat AMC (Annual Maintenance Charge)</h1><br />
            <span className="bg-light p-3 border-start border-primary border-4 text-secondary">Free for first year*</span><br /><br />

            <p>From second year onwards, for BSDA accounts:</p>
            <table class="table table-striped border mt-3">
                <thead>
                    <tr>
                        <th scope="col">Value of holdings</th>
                        <th scope="col">AMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Up to ₹4 lakh</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td>₹4 lakh – ₹10 lakh</td>
                        <td>₹100 per year + 18% GST, charged quarterly</td>
                    </tr>
                    <tr>
                        <td>Above ₹10 lakh</td>
                        <td>₹300 per year + 18% GST, charged quarterly</td>
                    </tr>
                </tbody>
            </table>

            <p>For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.</p>
            <p>To learn more about BSDA, <a href="/" style={{textDecoration:"none"}}>click here</a>. To learn more about AMC, <a href="/" style={{textDecoration:"none"}}>click here</a>.</p>
            <p>*Resident individual accounts only.</p><br /><br />
        </div>

       

     );
}

export default AMCCharges;