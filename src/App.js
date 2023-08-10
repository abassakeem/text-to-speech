import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Switch, Routes} from 'react-router-dom'
import Homepage from './components/homepage/homepage';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Fragment } from 'react';
import { Helmet } from 'react-helmet';



function App() {
  return (
    <Fragment>
      <Helmet><title>Text to speech converter</title></Helmet>

    <Router>
     
      <div>
        
      
    <Switch>
        <Route exact path="/" component={Homepage} />
      
        

      </Switch>
        </div>
        
       
        
    
       
    
     
    </Router>
    </Fragment>
    
  );
}

export default App;
