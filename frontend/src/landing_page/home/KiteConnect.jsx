import React from 'react'

function KiteConnect() {
    return ( 
        <div className="bg-body-tertiary">
            <div className="container ">
                <div className="row p-3"  >
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <img src="media\images\kiteConnect.svg" style={{width:"70%"}} alt="" />
                    </div>

                    <div className="col-6 ">
                        <p className="fs-6 text-muted" >Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more.</p>
                    </div>

                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <img src="media\images\kiteConnectBg.svg" style={{width:"70%"}} alt=""></img>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default KiteConnect;