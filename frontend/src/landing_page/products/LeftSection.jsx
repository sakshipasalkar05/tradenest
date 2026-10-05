import React from 'react'



function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src={imageURL} alt={productName}/>
                </div>
                
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href={learnMore} style={{ textDecoration: "none" , marginLeft: "70px" }}>Learn More  <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className="mt-3">
                        <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg" alt="google play store" />
                        </a>

                        <a href={appStore} style={{ marginLeft: "30px" }}>
                            <img src="media/images/appStoreBadge.svg" alt="app store" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;