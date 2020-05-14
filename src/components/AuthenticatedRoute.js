import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ children, ...props }) => {
    const token = localStorage.getItem("token");
    
    return (<Route {...props}>
        {
          token ? children : (
              <Redirect 
                  to={{
                      pathname: "/login",
                      state: { from: props.location }
                  }}
              />
          )
        }
    </Route>);

}

export default AuthenticatedRoute
