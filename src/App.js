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
import CreateMemoir from './components/CreateMemoir';
import MemoirContent from './components/MemoirContent';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/memoir/:id">
          <MemoirContent />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <AuthenticatedRoute path="/dashboard">
          <Dashboard />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/create-memoir">
          <CreateMemoir />
        </AuthenticatedRoute>
      </Switch>
    </Router>
  );
}

export default App;
