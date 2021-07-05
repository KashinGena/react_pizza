
import './scss/app.scss';
import Header from './Header'
import React, { useState } from 'react'

import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Route } from 'react-router-dom';
import axios from 'axios';

function App() {

  const [state, setState]= useState([])
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then((resp) => {setState(resp.data.pizzas)
    
  })
   
    
    
    
  },[])

  return (
    <div className="wrapper">
      <Header/>
      <Route exact path='/'>
        <Home pizzas={state}/>
      </Route>
      <Route  path='/cart' component={Cart}/>
      
    </div>
  );
}

export default App;
