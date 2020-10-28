import React, { Component } from 'react'
// import Popup from "reactjs-popup";
import { NavLink } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import StoreIcon from '@material-ui/icons/Store';







class NavBar extends Component {
      render() {
        const StyledBadge = withStyles((theme) => ({
            badge: {
              right: -3,
              top: 13,
              border: `2px solid ${theme.palette.background.paper}`,
              padding: '0 4px',
              
              
            },
          }))(Badge);
        
          
        return (
            <div>
                <nav className="navbar navbar-light" style={{backgroundColor: "#00bcd4"}} >
                    <div className="navbar-brand"><b>ShoppngCart</b></div>
                        
    
                    <div>
                        <NavLink className="m-3 " to="/"><HomeIcon id="icon"/></NavLink>
                        <NavLink className="m-3" to="/products"  ><StoreIcon id="icon"/></NavLink>
                    
                        <NavLink className="m-3" to="/cart">    
                            <StyledBadge badgeContent={this.props.totalCounter} color="secondary">
                                <ShoppingCartIcon id="icon"/>
                            </StyledBadge>
                        </NavLink> 
                    </div>
                </nav>     
            </div>
        )
    }
}

export default NavBar
