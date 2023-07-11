import './App.css';
import Login from './login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageProduct from './manageProduct';
import ProductDetail from './ProductDetail';
function App() {
    return (
        
            <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/manage-product" element={<ManageProduct />} />
                <Route exact path="/" element={<Login />} />
                <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
            </BrowserRouter>
           
            
        
    );
}

export default App;
