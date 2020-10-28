import React from 'react'
// import Total from './Total';
import DeleteIcon from '@material-ui/icons/Delete';
import './Item.css';


const Cart = (props) =>{
   
 
        return (

            <div className="container">     
                <div id="card" className="card mb-2" style={{maxWidth: "500px"}} >
                    <div className= "row m-2 ">
                   
                            <div className="col-md-4">
                            <img src={props.image} className="card-img m-2" alt="..."/>
                            </div>
                                    <div className="col-md-8">
                                            <div className="card-body" >
                                                <h5 className="card-title" >{props.name}</h5> 
                                                <p className="card-text">{props.city}</p>
                                                <p className="card-text">{props.size}</p> 
                                                <p className="card-text" style={{color:"#CC1100	"}}><b>{props.price}</b></p> 
                                            
                                                <button className="btn btn-danger" onClick={()=>props.onDelete(props.item)}>
                                                    <DeleteIcon  style={{color:"black"}}/></button>
                                            </div>
                                                {/* <button className="btn btn-info" onClick={()=>this.props.onIncrement(this.props.item)} > + </button> */}
                                            
                                                
                                                
                                    
                                    </div>
                    </div>
                </div>
            </div>
            
        );
 
    }

export default Cart
