import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  login() {},
  logout() {},
});

AuthContext.displayName = 'AuthContext';

export default AuthContext;
