import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Header from './components/nav/Header';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>

    </BrowserRouter>
  );
}



export default App;
