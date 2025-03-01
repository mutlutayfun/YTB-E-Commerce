import { Route, Routes } from "react-router-dom"
import "./App.css"

import HomePage from "./pages/HomePage"
import AccauntPage from "./pages/AccauntPage"
import Blog from "./pages/Blog"
import CartPage from "./pages/CartPage"
import ContactPage from "./pages/ContactPage"
import ShopPage from "./pages/ShopPage"
import SingleProductPage from "./pages/SingleProductPage"
import SingleBlogPage from "./pages/SingleBlogPage"
import CategoryList from "./pages/Admin/Categories/CategoryList"


function App() {


  return (
    <>
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/account" element={<AccauntPage />} />
      <Route path="/single-product" element={<SingleProductPage />} />
      <Route path="/single-blog" element={<SingleBlogPage />} />
      <Route path="/admin/*">
        <Route path="categories" element={<CategoryList/>} />
        <Route path="products" element={<CategoryList/>} />
      </Route>

    </Routes>
    </>
  )
}

export default App
