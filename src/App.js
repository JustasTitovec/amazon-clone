import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from '../src/components/Header/Header';
import Home from './pages/Home/Home.js';
import Checkout from './pages/Checkout/Checkout.js';
import Login from './pages/Login/Login.js';
import { useStateValue } from '../src/state/StateProvider';
import { auth } from './firebase';
import Footer from '../src/components/Footer/Footer';
import Details from '../src/components/Details/Details';

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route
            path="/details/:id"
            render={props => <Details {...props} />}
          ></Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
