import React from 'react'

function Hero() {
    return ( 
        <div className="bg-body-tertiary py-5 mb-4">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="fs-2 fw-medium m-0">Support Portal</p>
                    <a href="/" className="btn btn-primary fs-6 px-4">My tickets</a>
                </div>
                <div className="input-group input-group-lg bg-white border rounded">
                    <span className="input-group-text bg-white border-0" id="search">
                        <i className="fa-solid fa-magnifying-glass ms-2" style={{color: "rgb(30, 48, 80)"}}></i>
                    </span>
                    <input className="form-control border-0 shadow-none fs-6" type="search" placeholder="Eg: How do I open my account, How do i activate F&O..." aria-label="search"/>
                </div>
            </div>
        </div>
     );
}

export default Hero;