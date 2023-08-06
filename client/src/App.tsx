
import logo from './logo.svg';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./page/Home";
import Login from "./page/sign/Login";
import SignUp from "./page/sign/SignUp";
import PageProduct from "./page/products/page.product";
import ProductInforPage from "./page/products/info.product";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/products/:id" element={<ProductInforPage />} />
                <Route path="/collections/:id" element={<PageProduct />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
