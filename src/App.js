import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ProductView from "./pages/ProductView";
import CrudUser from "./pages/CrudUser";
import CrudProduct from "./pages/CrudProduct";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="productview" element={<ProductView />} />
            <Route path="cruduser" element={<CrudUser />} />
            <Route path="crudproduct" element={<CrudProduct />} />
            
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
