`//9.create a react component that handles authentication and authorization`
import React, { createContext, useState, useContext } from 'react';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
const PrivateRoute = ({ element: Element, ...rest }) => {
    const { isAuthenticated } = useAuth();
    return (
      <Route
        {...rest}
        element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
      />
    );
  };
  const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleLogin = () => {
      login();
      navigate('/protected');
    };
    return (
      <div>
        <h2>Login Page</h2>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };
const Home = () => {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  };
  const ProtectedPage = () => {
    const { logout } = useAuth();
    return (
      <div>
        <h1>Protected Page</h1>
        <button onClick={logout}>Logout</button>
      </div>
    );
  };
  const App = () => {
    return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <PrivateRoute path="/protected" element={<ProtectedPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    );
  };
export const useAuth = () => useContext(AuthContext);

