import React, { Component } from 'react'
import Button from './Button';


class Display extends Component {
   
    
    render() {
        return (
            <div>
            <div>
                {/* <h3>.........................Products.....................</h3>  */}
               {this.props.counters.map(counter =>( <Button  key={counter.id}    
                bClick={this.props.cliCking} counter={counter} image={counter.image} 
                name={counter.name} city={counter.city} price={counter.price} size={counter.size} />
                ))}
           
            </div>
            
            </div>
            
        )
    }
}

export default Display
