import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarComponent } from '../components/NavBarComponent/NavBarComponent';
import { Category } from "../pages/Category";
import { Home } from "../pages/Home"
import { Item } from "../pages/Item";
import { Search } from "../pages/Search";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
        <NavBarComponent/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category/:categoryId" element={<Category/>}/>
            <Route path="/item/:id" element={<Item/>}/>
            <Route path="/search/:busqueda" element={<Search/>}/>
        </Routes>
    </BrowserRouter>
  )
}