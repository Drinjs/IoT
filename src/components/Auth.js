import { Navigate, useLocation } from 'react-router-dom'
import { useContext, createContext, useState } from 'react'

let AuthContext = createContext({
  user: null,
  signin:()=>{}, 
  signout: ()=>{},
});

const useAuth = () => {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  let signin = (newUser, callback) => {
    setUser(newUser);
    callback();
  };

  let signout = (callback) => {
    setUser(null);
    callback();
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation()
  if (!auth.user && location.pathname !== '/login') {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export {
  AuthProvider,
  RequireAuth,
  useAuth
}
