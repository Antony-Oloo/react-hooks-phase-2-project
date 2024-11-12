import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CouponList from './components/CouponList';
import CouponForm from './components/CouponForm';
import CouponDetail from './components/CouponDetail';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={CouponList} />
          <Route path="/add" component={CouponForm} />
          <Route path="/coupons/:id" component={CouponDetail} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;