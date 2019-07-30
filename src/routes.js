/**
 * Routes : returns routes of our application for router
 */
import React from 'react';
import { Route , Switch } from 'react-router-dom';
/****************** Components ******************/

import AboutUs from './Components/AboutUs/aboutus';
import Careers from './Components/Careers/careers';
import ContactUs from './Components/ContactUs/contactus';
import Services from './Components/Services/services';
import Products from './Components/Products/products';
import Events from './Components/Events/events';
import Home from './Components/Home/home';
import FourOFour from './Components/FourOFour/fourofour';

const Routes = () => {
   return (
       <Switch>
           <Route path="/aboutus" exact component={AboutUs}/>
           <Route path="/careers" exact component={Careers}/>
           <Route path="/contactus" exact component={ContactUs}/>
           <Route path="/services" exact component={Services}/>
           <Route path="/products" exact component={Products}/>
           <Route path="/events" exact component={Events}/>
           <Route path="/" exact component={Home}/>
           <Route component={FourOFour}/>        
       </Switch>
   )
}

export default Routes;