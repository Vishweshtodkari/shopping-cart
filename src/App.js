import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import counters from '../src/data/posts.json';
import Cart from './components/Cart';
import Home from './components/Home';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './components/Error';
// import Navigation from './components/Navigation';
import Total from './components/Total';



class App extends Component {

  state = {
    counters, //:[
     //   {id:1, value:0},
     //   {id:2, value:0},
     //   {id:3, value:0},
     //   {id:4, value:0}
     // ] 
    display : 'first'
  
   }

   changeNumber = counter =>{
   console.log(counter);
   const counters = [...this.state.counters];
   const index = counters.indexOf(counter);
   counters[index] = {...counter};
   counters[index].value =1;
   this.setState({counters}); 
   }

  handleDelete = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    if((counters[index].value--) > 0 ){
    this.setState({counters});
    }
  }


   render() {
    

   
      const total = this.state.counters.reduce((total, item)=> total + (item.value===1 ? item.price : null), 0);
      const gst = total * (18/100);
      const gstntotal = gst + total;
      
      console.log(total);

     return (
          <div className="App">    

  
                <BrowserRouter>
                  <div>
                  <NavBar changeDisplay={this.changeDisplay} display={this.state.display} onChange={this.refreshPage}
                    totalCounter={ this.state.counters.filter(c =>c.value >0  ).length}  /> 
              
                 <div className="container">
                  <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/products" component={Display}>
                    <h4>...........Products........</h4> 
                      <Display   counters ={this.state.counters}
                    cliCking={this.changeNumber}/></Route>
                     
                    
                    <Route path="/cart" component={Cart}>
                      
                        <h4>...........Cart............</h4>
                            <div className="row">
                                <div className="col">
                                    {this.state.counters.map(item=>(item.value===1 ? (<Cart name={item.name} key={item.id} 
                                    image={item.image} price={item.price} item={item}
                                      onDelete={this.handleDelete} />):null))}
                                </div>
                                
                                 {/* total value of cart       */}
                                {total > 0 ?

                                  <div className="col" id="total">
                                    <div id="details">
                                      {this.state.counters.map(item=>(item.value >=1 ? (<Total price={item.price} 
                                      name={item.name} key ={item.id}/>):null))}


                                        <h5 id="add">GST-&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                        {gst===0 ? null : gst}</h5>
                                        <div id="line"/>
                                        <h5 id="add">Total &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                        {gstntotal===0 ? null : gstntotal}</h5>
                                      </div>   
                                  </div>
                
                                :<h4 className="container alert alert-danger">
                                  Your cart is empty</h4>}
                            </div>
                       
                    </Route>
                     
                    <Route component={Error}/>
                  </Switch>
                  </div>
                  </div>
                </BrowserRouter> 
                
          </div>  
           
      
     
     );
   }  

 
}

export default App

