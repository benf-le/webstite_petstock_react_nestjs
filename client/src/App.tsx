
import logo from './logo.svg';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./page/Home";
import Login from "./page/sign/Login";
import SignUp from "./page/sign/SignUp";
import ProductsDetail from "./components/ProductsDetail";
import PageProduct from "./page/products/page.product";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/products/:id" element={<ProductsDetail />} />
                <Route path="/collections/:id" element={<PageProduct />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
