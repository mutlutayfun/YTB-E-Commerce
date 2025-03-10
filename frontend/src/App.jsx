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
import CreateCategory from "./pages/Admin/Categories/CreateCategory"
import UpdateCategory from "./pages/Admin/Categories/UpdateCategory"
import UserList from "./pages/Admin/Users/UserList"
import CreateUser from "./pages/Admin/Users/CreateUser"
import UpdateUser from "./pages/Admin/Users/UpdateUser"
import ProductList from "./pages/Admin/Products/ProductList"
import CreateProduct from "./pages/Admin/Products/CreateProduct"
import UpdateProduct from "./pages/Admin/Products/UpdateProduct"
import CouponList from "./pages/Admin/Coupon/CouponList"
import CreateCoupon from "./pages/Admin/Coupon/CreateCoupon"
import UpdateCoupon from "./pages/Admin/Coupon/UpdateCoupon"


function App() {


  return (//returne le component basmak için html döneriz.
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
        <Route index element={<CategoryList/>} />
        <Route path="categories" element={<CategoryList/>} />
        <Route path="categories/create" element={<CreateCategory/>} />
        <Route path="categories/update/:id" element={<UpdateCategory/>} />
        <Route path="users" element={<UserList/>}/>
        <Route path="users/create" element={<CreateUser/>} />
        <Route path="users/update/:id" element={<UpdateUser/>}/>
        <Route path="products" element={<ProductList/>}/>
        <Route path="products/create" element={<CreateProduct/>}/>
        <Route path="products/update/:id" element={<UpdateProduct/>}/>
        <Route path="coupons" element={<CouponList/>}/>
        <Route path="coupons/create" element={<CreateCoupon/>}/>
        <Route path="coupons/update/:id" element={<UpdateCoupon/>}/>
        
      </Route>

    </Routes>
    </>
  )
}

export default App
