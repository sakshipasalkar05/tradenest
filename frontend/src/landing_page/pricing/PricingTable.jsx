import React from 'react';
import { useState } from 'react';

function PricingTable() {

    const [activeTab, setActiveTab] = useState("commodity");

    return ( 
        <div className="table-responsive mt-4 mx-5">
            <button className="btn btn-link " style={{textDecoration: 'none'}} onClick={() => setActiveTab("equity")}><b>Equity</b></button>
            <button className="btn btn-link" style={{textDecoration: 'none'}} onClick={() => setActiveTab("commodity")}><b>Commodity</b></button>
            <button className="btn btn-link" style={{textDecoration: 'none'}} onClick={() => setActiveTab("currency")}><b>Currency</b></button>

            <br /><br />

            {activeTab === "equity" && (
                <table className="table table-striped border align-middle">
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-center py-3">Equity delivery</th>
                        <th className="text-center py-3">Equity intraday</th>
                        <th className="text-center py-3">F&O - Futures</th>
                        <th className="text-center py-3">F&O - Options</th>         
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="text-muted">Brokerage</td>
                        <td>Zero Brokerage</td>
                        <td>0.03% or Rs. 20/executed<br />order whichever is lower</td>
                        <td>0.03% or Rs. 20/executed<br />order whichever is lower</td>
                        <td>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr >
                        <td className="text-muted">STT/CTT</td>
                        <td>0.1% on buy & sell</td>
                        <td>0.025% on the sell side</td>
                        <td>0.05% on the sell side</td>
                        <td>
                            <ul className="mb-0 ps-3">
                                <li>0.15% of the intrinsic value on options that are bought and exercised</li>
                                <li className="mt-2">0.15% on sell side (on premium)</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td className="text-muted">Transaction<br />charges</td>
                        <td>NSE: 0.00307%<br />BSE: 0.00375%</td>
                        <td>NSE: 0.00307%<br />BSE: 0.00375%</td>
                        <td>NSE: 0.00183%<br />BSE: 0.00225%</td>
                        <td>NSE: 0.03553% (on premium)<br />BSE: 0.0325% (on premium)</td>
                    </tr>

                    <tr >
                        <td className="text-muted">GST</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>

                    <tr>
                        <td className="text-muted">SEBI charges</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                    </tr>


                    <tr >
                        <td className="text-muted">Stamp charges</td>
                        <td>0.015% or ₹1500 / crore on buy side</td>
                        <td>0.003% or ₹300 / crore on buy side</td>
                        <td>0.002% or ₹200 / crore on buy side</td>
                        <td>0.003% or ₹300 / crore on buy side</td>
                    </tr>

                </tbody>

                </table>
            )}

            {activeTab === "currency" && (
                <table className="table table-striped border align-middle">
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-center py-3">Currency futures</th>
                        <th className="text-center py-3">Currency options</th>      
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="text-muted">Brokerage</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>Rs. 20/ executed order</td>
                    </tr>

                    <tr >
                        <td className="text-muted">STT/CTT</td>
                        <td>No STT</td>
                        <td>No STT</td>
                    </tr>

                    <tr>
                        <td className="text-muted">Transaction charges</td>
                        <td>NSE: 0.00035%<br />BSE: 0.00045%</td>
                        <td>NSE: 0.0311%<br />BSE: 0.001%</td>
                    </tr>

                    <tr>
                        <td className="text-muted">GST</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>

                    <tr>
                        <td className="text-muted">SEBI charges</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                    </tr>


                    <tr >
                        <td className="text-muted">Stamp charges</td>
                        <td>0.0001% or ₹10 / crore on buy side</td>
                        <td>0.0001% or ₹10 / crore on buy side</td>
                    </tr>

                </tbody>

                </table>
            )}

            {activeTab === "commodity" && (
                <table className="table table-striped border align-middle">
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-center py-3">Commodity futures</th>
                        <th className="text-center py-3">Commodity options</th>      
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="text-muted">Brokerage</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>Rs. 20/ executed order</td>
                    </tr>

                    <tr >
                        <td className="text-muted">STT/CTT</td>
                        <td>0.01% on sell side (Non-Agri)</td>
                        <td>	0.05% on sell side</td>
                    </tr>

                    <tr>
                        <td className="text-muted">Transaction charges</td>
                        <td>MCX: 0.0021%<br />NSE: 0.0001%</td>
                        <td>NSE: 0.0418%<br />BSE: 0.001%</td>
                    </tr>

                    <tr>
                        <td className="text-muted">GST</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>

                    <tr>
                        <td className="text-muted">SEBI charges</td>
                        <td>Agri: <br /> ₹1/ crore<br />Non-Agri: <br />₹10 / crore</td>
                        <td>₹10 / crore</td>
                    </tr>


                    <tr >
                        <td className="text-muted">Stamp charges</td>
                        <td>0.002% or ₹200 / crore on buy side</td>
                        <td>0.003% or ₹300 / crore on buy side</td>
                    </tr>

                </tbody>

                </table>
            )}

            <h4 className="text-center my-5"><a href="/" style={{textDecoration:"none"}}>Calculate your costs upfront</a> using our brokerage calculator</h4>
        </div>
     );
}

export default PricingTable;