import React, { Component } from 'react'

class Quantity extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={this.props.onIncrement}><b>+</b></button>
                <button className="btn btn-warning" onClick={this.props.onDecrement}><b>-</b></button>
            </div>
        )
    }
}

export default Quantity
