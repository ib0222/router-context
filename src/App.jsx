import { Route,Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Favorites from "./pages/Favorites";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
