
import './scss/app.scss';
import Header from './Header'
import React from 'react'

import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {fetchPizzas} from './redux/actions/pizza'

function App() {
  const dispatch = useDispatch()



  React.useEffect(() => {
    dispatch(fetchPizzas())
    
  },[])



  return (
    <div className="wrapper">
      <Header/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route  path='/cart' component={Cart}/>
      
    </div>
  );
}

export default App;
