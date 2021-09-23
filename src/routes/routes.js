import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductDetails from '../pages/Product';
import Contact from '../pages/Contact';
import Cart from '../pages/Cart';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} /> 
                <Route path="/details" component={ProductDetails}/>    
                <Route path="/contact" component={Contact}/>  
                <Route path="/cart" component={Cart} />        
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;