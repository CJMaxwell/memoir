import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import NewMemoir from './components/NewMemoir';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <AuthenticatedRoute path="/dashboard">
          <Dashboard />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/create-memoir">
          <NewMemoir />
        </AuthenticatedRoute>
      </Switch>
    </Router>
  );
}

export default App;
