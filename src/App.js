import { BrowserRouter, Routes, Route, Link, Navigate, Outlet } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ProductView from "./pages/ProductView";
import CrudUser from "./pages/CrudUser";
import CrudProduct from "./pages/CrudProduct";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";

import { useLoginContext } from './LoginContext';

const ProtectedRoute = ({
  isAllowed,
  redirectPath = '/home',
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

function App() {
  const { user } = useLoginContext();
  return (
    <div className="App">      
        <BrowserRouter>        
          <Routes>
            <Route path="/login" index element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route element={<ProtectedRoute isAllowed={user.username} />}>
                <Route path="gallery" element={<Gallery />} />
                <Route path="productview" element={<ProductView />} />
              </Route>
              <Route 
                path="cruduser" 
                element={
                  <ProtectedRoute
                    redirectPath="/home"
                    isAllowed={user.username && user.permissions.includes('editor')}
                  >
                    <CrudUser />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="crudproduct" 
                element={
                  <ProtectedRoute
                    redirectPath="/home"
                    isAllowed={user.username && user.permissions.includes('editor')}
                  >
                    <CrudProduct />
                  </ProtectedRoute>
                } 
              />            
              <Route path="*" element={<NoPage />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>      
    </div>
  );
}

export default App;
