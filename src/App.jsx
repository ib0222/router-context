import { Route, Routes } from "react-router-dom"

import Layout from "./components/Layout"
import { CardContextProvider } from "./context/CardContext"
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import Products from "./pages/Products"
function App() {
  return (
    <CardContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </CardContextProvider>
  )
}

export default App
