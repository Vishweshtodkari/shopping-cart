import React, { Component } from 'react'
import './Item.css';

class Button extends Component {

     render() {

        return(
        
            <div className="container">
                <div  className="row m-2" style={{float:"left"}}>                  
                    <div className="card col-sm-2.90 m-1.80" style={{height:"400px", width:"200px"}}> 
                        <img className="card-img-top" src={this.props.image}/> 
                        <div id="productCard" className="card-body"> 
                            <h4 className="card-title">{this.props.name}</h4> 
                            <p className="card-text">{this.props.city}</p>
                            <p className="card-text">{this.props.size}</p> 
                            <p className="card-text" style={{color:"#CC1100	"}}>Price: <b>{this.props.price}</b></p> 
                        </div> 
                       
                        <button id="probtn" className="btn btn-info " style={{color:"black"}} onClick={()=>this.props.bClick(this.props.counter)}>Add to Cart</button>
                    </div>
                </div>  
            </div>
        
        
        

        )
    }
    formatCount() {
        console.log(this.props.counter.id);
        const {value} = this.props.counter.id;
        return value > 0 ? this.props.counter.id : value;
    }
}




export default Button
