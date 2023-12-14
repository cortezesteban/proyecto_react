import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarComponent } from '../components/NavBarComponent/NavBarComponent';
import { Category } from "../pages/Category";
import { Home } from "../pages/Home"
import { Item } from "../pages/Item";
import { Search } from "../pages/Search";
import { useAllCategory } from "../hooks/useCategory";

export const MainRoutes = () => {

  const { listaCategoria, error } = useAllCategory();

  return (
    <BrowserRouter>
        {error ? (
            <div>Hubo un error</div>
        ) : (
          <NavBarComponent category={listaCategoria}/>
        )}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category/:categoryId" element={<Category/>}/>
            <Route path="/item/:id" element={<Item/>}/>
            <Route path="/search/:busqueda" element={<Search/>}/>
        </Routes>
    </BrowserRouter>
  )
}