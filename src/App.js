
import './scss/app.scss';
import Header from './Header'
// import Button from './Button';

import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Route exact path='/' component={Home}/>
      <Route  path='/cart' component={Cart}/>
      
    </div>
  );
}

export default App;
