import React, { Component } from 'react'

class AddCartButton extends Component {
    render() {
        return (
            <div>
            <button className="btn btn-secondary m-4" onClick={this.props.addToCart} >Click to Add</button>
                
            </div>
        )
    }
}

export default AddCartButton
