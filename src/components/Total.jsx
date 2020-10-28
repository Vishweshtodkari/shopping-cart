import React from 'react'



const Total = (props) => {
    const gst = props.price * (18/100);
    const gstotal= gst+ props.price;
    console.log(gstotal);

    return (
        <div className="container">

        
       <h5 style={{textAlign:"center", color:"gray", marginLeft: "240px"}}>{props.price}</h5>
        
    
     
        </div>
    )
}

export default Total
