import React from 'react'


function AccountOpening() {

    return ( 
        <div className="container my-5">
            <h1>Charges for account opening</h1>
            <table class="table table-striped border mt-3">
                <thead>
                    <tr>
                        <th scope="col">Type of account</th>
                        <th scope="col">Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Individual account</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td>Minor account</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td>NRI account</td>
                        <td>₹ 500 </td>
                    </tr>
                    <tr>
                        <td>HUF account</td>
                        <td>Free (online) / ₹ 500 (offline)</td>
                    </tr>
                    <tr>
                        <td>Partnership, LLP, and Corporate accounts (offline only)</td>
                        <td>₹ 500 </td>
                    </tr>
                </tbody>
            </table><br /><br />
        </div>
     );
}

export default AccountOpening;