import React from 'react'



function RightSection(
  {imageURL,
  productName,
  productDesription,
  link,
  linkName,
}

) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <a href={link} style={{ textDecoration: "none" }}>{linkName} <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>

                <div className="col-6 ">
                    <img src={imageURL} alt={productName}/>
                </div>
                
            </div>
        </div>
     );
}

export default RightSection;