import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div>
                <h3 style={{color:"orange"}}>Welcome In Shopping Cart</h3>

                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-interval="10000">
                            <img src="shop.gif" className="d-block w-100" alt="..." style={{height: "500px"}}/>
                            </div>
                            <div className="carousel-item" data-interval="2000">
                            <img src="..." className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                </div>
            </div>

        )
    }
}

export default Home
