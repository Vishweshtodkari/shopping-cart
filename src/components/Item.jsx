import React, { Component } from 'react'
import './Item.css';
import AddCartButton from './AddCartButton';


class Item extends Component {
  
    render() {
        return (
                <div >
                    
                 <div className="card col-sm-2.95 m-2"> 
                        <img className="card-img-top" src={this.props.image}/> 
    
                        <div className="card-body"> 
                        <h3 className="card-title">{this.props.name}</h3> 
                        <p className="card-text">{this.props.city}</p> 
                        </div> 
                        <div><AddCartButton addToCart={this.handelIncrement}/>    
                        {this.state.value} 
                        </div>           
                        
                    </div> 
                    </div>

        




           
           )
    }
}

export default Item
